var treeContainer = $("#TreeContainer");
var sposeDelimiter = 20;

var generateTextElement = function (x, y, text) {
    return '<text x="' + x + '" y="' + y + '" fill="red">' + text + '</text>';
}

$(document).ready(function () {
    $.ajax({
        url: '/umbraco/surface/LegacyTreeSurface/Index',
        type: 'GET',
        success: function (result) {
            $.each(result, function (layerIndex, layer) {
                console.log(layer.Level + " - " + layer.IsInitialized + " - " + layer.Length);
                if (layer.IsInitialized) {
                    var svgElement = '<svg height="300" width="' + layer.Length + '">';

                    $.each(layer.Members, function (memberIndex, member) {
                        svgElement += generateTextElement(member.x, member.y, member.Name);
                        if (member.Spouse !== '') {
                            svgElement += generateTextElement(member.x, member.y + 20, "(" + member.Spouse + ")");
                        }
                        if (member.SpouseSecond !== '') {
                            svgElement += generateTextElement(member.x, member.y + 40, "(" + member.SpouseSecond + ")");
                        }
                    });
                    svgElement += '</svg>';

                    treeContainer.append(svgElement);
                }
            });
        }
    });
});