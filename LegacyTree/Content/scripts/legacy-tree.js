var treeContainer = $("#TreeContainer");
var elementHeight = 18;
var spouseDelimiter = 20;
var parentOffset = 50;
var memberOffset = 10;
var levelDelimiter = 300;

var levelsNumber = 0;
var levelsCurrentOffset = [];

var prepareMember = function (member, level) {
    var textElement = '<text data-parent="' + member.ParentID + '" data-level="' + level + '" data-role="1" data-id="' + member.ID + '" y="' + member.LevelOffset + '">';
    textElement += '<tspan x="0" dy="' + elementHeight + '" text-anchor="middle" fill="black">' + member.Name + '</tspan>'

    if (member.Spouse !== '') {
        textElement += '<tspan x="0" dy="' + elementHeight + '" text-anchor="middle" fill="#666">' + member.Spouse + '</tspan>';
    }
    if (member.SpouseSecond !== '') {
        textElement += '<tspan x="0" dy="' + elementHeight + '" text-anchor="middle" fill="#666">' + member.SpouseSecond + '</tspan>';
    }
    textElement += '</text>';

    return textElement;
}

var renderElements = function () {
    $.ajax({
        url: '/umbraco/surface/LegacyTreeSurface/Index',
        type: 'GET',
        success: function (result) {
            levelsNumber = result.length;
            var svgElement = '<svg height="' + levelsNumber * levelDelimiter + '" width="2000">';
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
        }
    });
}

var alignTree = function () {
    var dedaMile = $("*[data-level='0']");

    initlevelsCurrentOffset();
    alignItem(dedaMile);
}

var alignItem = function (element) {
    var currentLevel = $(element).data('level');
    var currentParent = $(element).data('parent');
    var elementId = $(element).data("id");
    var lastLevelParent = levelsCurrentOffset[currentLevel].lastParent;
    var elementOffset = memberOffset;
    var elementWidth = $(element)[0].getBBox().width;

    var children = $("*[data-parent='" + elementId + "']");
    if (children.length > 0) {
        var currentChildOffset = levelsCurrentOffset[currentLevel + 1].offset;
        $.each(children, function (cIndex, child) {
            alignItem(child);
        });
        var latestChildOffset = levelsCurrentOffset[currentLevel + 1].offset;
        elementOffset += (latestChildOffset - currentChildOffset - elementWidth) / 2;
    }

    var newX = levelsCurrentOffset[currentLevel].offset + elementOffset;
    $.each($(element).children(), function (textIndex, textElement) {
        $(textElement).attr("x", newX);
    });
    $(element).attr('transform', "translate(" + elementWidth / 2 + ")")

    if (children.length > 0) {
        levelsCurrentOffset[currentLevel].offset = levelsCurrentOffset[currentLevel + 1].offset;

        $.each(children, function (cIndex, child) {
            var line = createLine(newX + elementWidth / 2,
                parseInt($(element).attr("y")),
                (child.getBBox().x + child.getBBox().width),
                (child.getBBox().y + (child.getBBox().height)));

            $('svg')[0].appendChild(line);
        });
    }
    else {
        levelsCurrentOffset[currentLevel].offset = newX + elementWidth;
    }

    if ((typeof levelsCurrentOffset[currentLevel + 1] !== 'undefined') &&
        levelsCurrentOffset[currentLevel + 1].offset < levelsCurrentOffset[currentLevel].offset) {
        levelsCurrentOffset[currentLevel + 1].offset = levelsCurrentOffset[currentLevel].offset;
    } 

    levelsCurrentOffset[currentLevel].lastParent = currentParent;
}

var createLine = function (x1, y1, x2, y2) {
    var aLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    aLine.setAttribute('x1', x1);
    aLine.setAttribute('y1', y1);
    aLine.setAttribute('x2', x2);
    aLine.setAttribute('y2', y2);
    aLine.setAttribute('stroke', 'black');
    aLine.setAttribute('stroke-width', 1);
    return aLine;
}

var initlevelsCurrentOffset = function () {
    for (var i = 1; i <= levelsNumber; i++) {
        levelsCurrentOffset.push({
            index: i,
            offset: parentOffset,
            lastParent: 0
        });
    }
};

$(document).ready(function () {
    renderElements();
});