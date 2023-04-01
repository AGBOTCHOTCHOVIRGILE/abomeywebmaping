var size = 0;
var placement = 'point';
function categories_zone_de_vegetation_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'FORET_CLAIRE':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(108,239,8,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'FORET_GALERIE':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(103,112,238,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PLANTATION_FORESTIERE':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,213,69,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SAVANE':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,191,111,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SAVANE_ARBOREE':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(102,210,95,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_zone_de_vegetation_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("type");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_zone_de_vegetation_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
