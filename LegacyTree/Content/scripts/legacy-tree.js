var treeContainer = $("#TreeContainer");
var _elementHeight = 18;
var _parentOffset = 50;
var _memberOffset = 10;
var _levelDelimiter = 40;
var _currentZoom = 0.5;
var _minZoom = 0.2;
var _maxZoom = 3;
var _zoomOffset = 0.2;

var _branchesColor = '#855723';

var _levelsNumber = 0;
var _levelsCurrentOffset = [];
var _screenSVGRatio = 1;

var previousX = 0;
var previousY = 0;
var xOveralDelta = 0;
var yOveralDelta = 0;
var clicking = false;


var prepareMember = function (member, level) {
    var levelOffset = Math.pow(_levelsNumber - level, 2) * _levelDelimiter;
    var textElement = '<text data-parent="' + member.ParentID + '" data-level="' + level + '" data-role="1" data-id="' + member.ID + '" y="' + levelOffset + '">';
    textElement += '<tspan x="0" dy="' + _elementHeight + '" text-anchor="middle" fill="black">' + member.Name + '</tspan>';

    if (member.Spouse !== '') {
        textElement += '<tspan x="0" dy="' + _elementHeight + '" text-anchor="middle" fill="#666">' + member.Spouse + '</tspan>';
    }
    if (member.SpouseSecond !== '') {
        textElement += '<tspan x="0" dy="' + _elementHeight + '" text-anchor="middle" fill="#666">' + member.SpouseSecond + '</tspan>';
    }
    textElement += '</text>';

    return textElement;
};

var initElements = function () {
    $.ajax({
        url: '/umbraco/surface/LegacyTreeSurface/Index',
        type: 'GET',
        success: function (result) {
            renderTree(result);
        }
    });
};

var renderTree = function (result) {
    _levelsNumber = result.length;
    var svgElement = '<svg height="' + 2000 + '" >';
    $.each(result, function (layerIndex, level) {
        if (level.IsInitialized) {
            $.each(level.Members, function (memberIndex, member) {
                svgElement += prepareMember(member, level.Level);
            });
        }
    });

    svgElement += '</svg>';
    treeContainer.append(svgElement);

    alignTree();
    updateScreenSVGRatio();
};

var alignTree = function () {
    var dedaMile = $("*[data-level='0']");

    initlevelsCurrentOffset();
    alignItem(dedaMile);
    setFullWidth();
};

var alignItem = function (element) {
    var currentLevel = $(element).data('level');
    var currentParent = $(element).data('parent');
    var elementId = $(element).data("id");
    var elementOffset = _memberOffset;
    var elementWidth = $(element)[0].getBBox().width;

    var children = $("*[data-parent='" + elementId + "']");
    if (children.length > 0) {
        var currentChildOffset = _levelsCurrentOffset[currentLevel + 1].offset;
        $.each(children, function (cIndex, child) {
            alignItem(child);
        });
        var latestChildOffset = _levelsCurrentOffset[currentLevel + 1].offset;
        if (latestChildOffset - currentChildOffset > elementWidth) {
            elementOffset += (latestChildOffset - currentChildOffset - elementWidth) / 2;
        }
    }

    var newX = _levelsCurrentOffset[currentLevel].offset + elementOffset;
    $.each($(element).children(), function (textIndex, textElement) {
        $(textElement).attr("x", newX);
    });
    $(element).attr('transform', "translate(" + elementWidth / 2 + ")");

    if (children.length > 0) {
        $.each(children, function (cIndex, child) {
            var level = $(element).data("level") + 1;
            var levelOffset = _levelsCurrentOffset.length - level;

            var line = createLine(newX + elementWidth / 2 - levelOffset / level / 4,
                                  parseInt($(element).attr("y")),
                                  child.getBBox().x + child.getBBox().width -  + levelOffset / level / 4,
                                  child.getBBox().y + child.getBBox().height + 10,
                                  levelOffset);

            $('svg')[0].appendChild(line);

            var line2 = createLine(newX + elementWidth / 2 + levelOffset / level / 2,
                                   parseInt($(element).attr("y")),
                                   child.getBBox().x + child.getBBox().width + levelOffset / level / 4,
                                   child.getBBox().y + child.getBBox().height + 10,
                                   levelOffset);

            $('svg')[0].appendChild(line2);
        });
    }

    if (children.length > 0 &&
        _levelsCurrentOffset[currentLevel + 1].offset > _levelsCurrentOffset[currentLevel].offset + elementWidth) {
        _levelsCurrentOffset[currentLevel].offset = _levelsCurrentOffset[currentLevel + 1].offset;
    }
    else {
        _levelsCurrentOffset[currentLevel].offset = newX + elementWidth;
    }

    if ((typeof _levelsCurrentOffset[currentLevel + 1] !== 'undefined') &&
        _levelsCurrentOffset[currentLevel + 1].offset < _levelsCurrentOffset[currentLevel].offset) {
        _levelsCurrentOffset[currentLevel + 1].offset = _levelsCurrentOffset[currentLevel].offset;
    }

    _levelsCurrentOffset[currentLevel].lastParent = currentParent;
};

var setFullWidth = function () {
    var longest = 0;
    $.each(_levelsCurrentOffset, function (index, layer) {
        if (longest < layer.offset) {
            longest = layer.offset;
        }
    });

    $("svg").attr("width", longest + _parentOffset);
};

var createLine = function (x1, y1, x2, y2, width) {
    var aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    aLine.setAttribute('x1', x1);
    aLine.setAttribute('y1', y1);
    aLine.setAttribute('x2', x2);
    aLine.setAttribute('y2', y2);
    aLine.setAttribute('stroke', _branchesColor);
    aLine.setAttribute('stroke-width', width);
    return aLine;
};

var initlevelsCurrentOffset = function () {
    for (var i = 1; i <= _levelsNumber; i++) {
        _levelsCurrentOffset.push({
            index: i,
            offset: _parentOffset,
            lastParent: 0
        });
    }
};

var scaleSvg = function () {
    if (_currentZoom > _maxZoom) {
        _currentZoom = _maxZoom;
    }
    else if (_currentZoom < _minZoom) {
        _currentZoom = _minZoom;
    }

    $("svg").css({ 'transform': "scale(" + _currentZoom + ") translate(0, 0)" });

    var xOffset = -$("svg").offset().left / _currentZoom;
    var yOffset = -$("svg").offset().top / _currentZoom;

    $("svg").css({ 'transform': "scale(" + _currentZoom + ") translate(" + xOffset + "px, " + yOffset + "px)" });

    $(treeContainer).width($("svg").width() * _currentZoom);
};

var zoomIn = function () {
    _currentZoom += _zoomOffset;
    updateScreenSVGRatio();
};

var zoomOut = function () {
    _currentZoom -= _zoomOffset;
    updateScreenSVGRatio();
};

var updateScreenSVGRatio = function() {
    _minZoom = $(window).width() / $("svg").width();
    scaleSvg();
};

// #region Events
$(document).ready(function () {
    initElements();
});

$(document).on('click', '.glyphicon-plus', function (event) {
    zoomIn();
});

$(document).on('click', '.glyphicon-minus', function (event) {
    zoomOut();
});

$(document).on('mousewheel', function (event) {
    if (event.originalEvent.wheelDelta / 120 > 0) {
        zoomOut();
    }
    else {
        zoomIn();
    }
});

$(window).resize(function (event) {
    updateScreenSVGRatio();
});

$(document).on('mousedown', 'svg', function (e) {
    e.preventDefault();

    xOveralDelta = $(window).scrollLeft();
    yOveralDelta = $(window).scrollTop();
    
    previousX = e.clientX;
    previousY = e.clientY;

    clicking = true;
    $("svg").addClass('moving');
});

$(document).on('mousemove', 'svg', function (e) {
    if (clicking) {
        var xDelta = e.clientX - previousX;
        var yDelta = e.clientY - previousY;

        if (xDelta !== 0) {
            $(window).scrollLeft(xOveralDelta - xDelta);
        }

        if (yDelta !== 0) {
            $(window).scrollTop(yOveralDelta - yDelta);
        }
    }
});

$(document).mouseup(function () {
    clicking = false;
    $("svg").removeClass('moving');
});
// #endregion Events