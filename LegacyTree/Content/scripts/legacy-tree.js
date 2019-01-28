var treeContainer = $("#TreeContainer");
var _elementHeight = 18;
var _parentOffset = 50;
var _memberOffset = 10;
var _levelDelimiter = 40;
var _currentZoom = 0;
var _prevZoom = 0;
var _minZoom = 0.2;
var _maxZoom = 3;
var _zoomOffset = 0.2;
var _zoomCenter = { x: 0, y: 0 };

var _branchesColor = {r: 102, g: 51, b: 0};

var _levelsNumber = 0;
var _levelsCurrentOffset = [];
var _screenSVGRatio = 1;

var previousX = 0;
var previousY = 0;
var xOveralDelta = 0;
var yOveralDelta = 0;
var clicking = false;

var initTree = function () {
    $.ajax({
        url: '/umbraco/surface/LegacyTreeSurface/Treeviz',
        type: 'GET',
        success: function (result) {
            result[0].father = null;

            console.log(result);
            var myTree = Treeviz.create({
                htmlID: "tree",
                nodeField: "id",
                flatData: true,
                relationnalField: "father",
                zoomBehavior: true,
                nodeWidth: 120,
                nodeHeight: 80,
                nodeColor: (nodeData) => nodeData.color,
                depthDistance: 200,
                horizontalLayout: false,
                nodeTemplate: (nodeData) => "<div style='height:80px; width:120px;display:flex;flex-direction:column;justify-content:center;align-items:center;'><div><strong>" + nodeData.text_1 + "</strong></div><div>is</div><div><i>" + nodeData.text_2 + "</i></div></div>",
                linkWidth: (nodeData) => (result.length - nodeData.id + nodeData.father) / 5,
                linkColor: (nodeData) => "#B0BEC5",
                onNodeClick: (nodeData) => console.log(nodeData)
            });
            var elements = new Array();
            $.each(result, function (index, element) {
                setTimeout(function () {
                    elements[index] = element;
                    myTree.refresh(elements);
                }, (500 - index*2) * index);
            });
        }
    });
};

var initElements = function () {
    $.ajax({
        url: '/umbraco/surface/LegacyTreeSurface/Index',
        type: 'GET',
        success: function (result) {
            renderTree(result);
            alignTree();
            updateScreenSVGRatio(true);
            animate();
        }
    });
};

var renderTree = function (result) {
    _levelsNumber = result.length;
    var svgElement = '<svg height="' + (Math.pow(_levelsNumber, 2) + 2) * _levelDelimiter + 'px">';
    $.each(result, function (layerIndex, level) {
        if (level.IsInitialized) {
            $.each(level.Members, function (memberIndex, member) {
                svgElement += prepareMember(member, level.Level);
            });
        }
    });

    svgElement += '</svg>';
    treeContainer.append(svgElement);
};

var prepareMember = function (member, level) {
    var levelOffset = Math.pow(_levelsNumber - level, 2) * _levelDelimiter;
    var textElement = '<text data-parent="' + member.ParentID + '" data-level="' + level + '" data-id="' + member.ID + '" y="' + levelOffset + '">';
    textElement += '<tspan x="0" dy="' + _elementHeight + '" text-anchor="middle">' + member.Name + '</tspan>';

    if (member.Spouse !== '') {
        textElement += '<tspan x="0" dy="' + _elementHeight + '" text-anchor="middle" y="' + (levelOffset + 16) + '">' + member.Spouse + '</tspan>';
    }
    if (member.SpouseSecond !== '') {
        textElement += '<tspan x="0" dy="' + _elementHeight + '" text-anchor="middle" y="' + (levelOffset + 32) + '">' + member.SpouseSecond + '</tspan>';
    }
    textElement += '</text>';

    return textElement;
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

            var line = createLine(newX + elementWidth / 2 - levelOffset / level / 2,
                                  parseInt($(element).attr("y")),
                                  child.getBBox().x + child.getBBox().width + levelOffset / level,
                                  child.getBBox().y + child.getBBox().height + 10,
                                  levelOffset,
                                  calculateColor(level),
                                  $(child).data('id'),
                                  $(element).data('id'));

            $('svg')[0].appendChild(line);

            var line2 = createLine(newX + elementWidth / 2 + levelOffset / level / 2,
                                   parseInt($(element).attr("y")),
                                   child.getBBox().x + child.getBBox().width + levelOffset / level,
                                   child.getBBox().y + child.getBBox().height + 10,
                                   levelOffset,
                                   calculateColor(level),
                                   $(child).data('id'),
                                   $(element).data('id'));

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

var createLine = function (x1, y1, x2, y2, width, color, childId, parentId) {
    var aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    aLine.setAttribute('x1', x1);
    aLine.setAttribute('y1', y1);
    aLine.setAttribute('x2', x2);
    aLine.setAttribute('y2', y2);
    aLine.setAttribute('data-stroke', color);
    aLine.setAttribute('stroke', '#ffffff');
    aLine.setAttribute('stroke-width', width);
    aLine.setAttribute('data-child', childId);
    aLine.setAttribute('data-parent', parentId);
    return aLine;
};

var calculateColor = function (level) {
    var color = "#";
    color += (_branchesColor.r + level < 10 ? "0" : "") + (_branchesColor.r + level).toString(16);
    color += (_branchesColor.g + level < 10 ? "0" : "") + (_branchesColor.g + level).toString(16);
    color += (_branchesColor.b + level < 10 ? "0" : "") + (_branchesColor.b + level).toString(16);
    return color;
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

var scaleSvg = function (isInit = false) {
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
    $(treeContainer).height($("svg").height() * _currentZoom);

    // move/scroll window
    var left = $(window).scrollLeft() + _zoomCenter.x;
    var top = $(window).scrollTop() + _zoomCenter.y;

    var leftOffset = left / _prevZoom * _currentZoom;
    var topOffset = top / _prevZoom * _currentZoom;

    var newLeft = leftOffset - _zoomCenter.x;
    var newTop = topOffset - _zoomCenter.y;

    $(window).scrollLeft(newLeft);
    $(window).scrollTop(newTop);

    _prevZoom = _currentZoom;

    if (isInit) {
        updateScreenSVGRatio();
    }
};

var zoomIn = function () {
    _currentZoom += _zoomOffset;
    updateScreenSVGRatio();
};

var zoomOut = function () {
    _currentZoom -= _zoomOffset;
    updateScreenSVGRatio();
};

var updateScreenSVGRatio = function(isInit = false) {
    _minZoom = $(window).width() / $("svg").width();
    scaleSvg(isInit);
};

var setZoomScreenCenter = function (x, y) {
    _zoomCenter.x = x;
    _zoomCenter.y = y;
};

var higlightMember = function (member, action) {
    if (action) {
        $(member).addClass('active');
    }
    else {
        $(member).removeClass('active');
    }

    var children = $('text*[data-parent="' + $(member).data('id') + '"]');
    $.each(children, function (index, child){
        higlightMember(child, action);
    });
};

var animate = function () {
    var num = Math.floor(Math.random() * 3) + 1;

    switch (num) {
        case 1:
            animate1();
            break;
        case 2:
            animate1();
            break;
        case 3:
            animate1();
            break;
        default:
            animate1();
            break;
    }
};

var animate1 = function () {
    var lines = $('line');
    var interval = 20;

    setInterval(function () {
        if (lines.length > 0) {
            var index = Math.floor(Math.random() * lines.length);
            var line1 = lines[index];
            var line2index;

            if (index === 0 || $(lines[index]).data('child') === $(lines[index + 1]).data('child')) {
                line2index = index + 1;
            }
            else {
                line2index = index - 1;
            }

            var line2 = lines[line2index];

            $(line1).attr('stroke', $(line1).data('stroke'));
            $(line2).attr('stroke', $(line2).data('stroke'));

            lines.splice(index, 1);
            lines.splice(line2index, 1);
        }
    }, interval);
};

var animate2 = function () {

};


// #region Events
$(document).ready(function () {
    initTree();
    //initElements();
});

$(document).on('click', '.glyphicon-plus', function (event) {
    setZoomScreenCenter($(window).width() / 2, $(window).height() / 2);
    zoomIn();
});

$(document).on('click', '.glyphicon-minus', function (event) {
    setZoomScreenCenter($(window).width() / 2, $(window).height() / 2);
    zoomOut();
});

$(document).on('mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    setZoomScreenCenter(event.clientX, event.clientY);
    if (event.originalEvent.wheelDelta / 120 > 0) {
        zoomIn();
    }
    else {
        zoomOut();
    }
});

$(document).on('mouseover', 'text', function (event) {
    higlightMember(event.currentTarget, true);
});

$(document).on('mouseleave', 'text', function (event) {
    higlightMember(event.currentTarget, false);
});

$(window).resize(function (event) {
    updateScreenSVGRatio();
});

$(document).on('mousedown', 'svg', function (event) {
    event.preventDefault();
    clicking = true;

    xOveralDelta = $(window).scrollLeft();
    yOveralDelta = $(window).scrollTop();
    
    previousX = event.clientX;
    previousY = event.clientY;
});

$(document).on('mousemove', 'svg', function (event) {
    if (clicking) {
        var xDelta = event.clientX - previousX;
        var yDelta = event.clientY - previousY;

        if (xDelta !== 0) {
            $(window).scrollLeft(xOveralDelta - xDelta);
        }

        if (yDelta !== 0) {
            $(window).scrollTop(yOveralDelta - yDelta);
        }

        if (xDelta !== 0 && yDelta !== 0) {
            $("svg").addClass('moving');
        };
    }
});

$(document).mouseup(function (event) {
    console.log("-");
    $("svg").removeClass('moving');
    event.preventDefault();
    clicking = false;
});
// #endregion Events