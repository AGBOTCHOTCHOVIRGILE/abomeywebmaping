var wms_layers = [];

var format_zone_de_vegetation_0 = new ol.format.GeoJSON();
var features_zone_de_vegetation_0 = format_zone_de_vegetation_0.readFeatures(json_zone_de_vegetation_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zone_de_vegetation_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone_de_vegetation_0.addFeatures(features_zone_de_vegetation_0);
var lyr_zone_de_vegetation_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zone_de_vegetation_0, 
                style: style_zone_de_vegetation_0,
                interactive: true,
    title: 'zone_de_vegetation<br />\
    <img src="styles/legend/zone_de_vegetation_0_0.png" /> FORET_CLAIRE<br />\
    <img src="styles/legend/zone_de_vegetation_0_1.png" /> FORET_GALERIE<br />\
    <img src="styles/legend/zone_de_vegetation_0_2.png" /> PLANTATION_FORESTIERE<br />\
    <img src="styles/legend/zone_de_vegetation_0_3.png" /> SAVANE<br />\
    <img src="styles/legend/zone_de_vegetation_0_4.png" /> SAVANE_ARBOREE<br />'
        });
var format_LIM_ABOMEY_1 = new ol.format.GeoJSON();
var features_LIM_ABOMEY_1 = format_LIM_ABOMEY_1.readFeatures(json_LIM_ABOMEY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIM_ABOMEY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIM_ABOMEY_1.addFeatures(features_LIM_ABOMEY_1);
var lyr_LIM_ABOMEY_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIM_ABOMEY_1, 
                style: style_LIM_ABOMEY_1,
                interactive: true,
                title: '<img src="styles/legend/LIM_ABOMEY_1.png" /> LIM_ABOMEY'
            });
var format_localite_2 = new ol.format.GeoJSON();
var features_localite_2 = format_localite_2.readFeatures(json_localite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localite_2.addFeatures(features_localite_2);
var lyr_localite_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_localite_2, 
                style: style_localite_2,
                interactive: true,
    title: 'localite<br />\
    <img src="styles/legend/localite_2_0.png" /> CL_ARRONDISSEMENT<br />\
    <img src="styles/legend/localite_2_1.png" /> CL_DEPARTEMENT<br />\
    <img src="styles/legend/localite_2_2.png" /> SIMPLE<br />\
    <img src="styles/legend/localite_2_3.png" /> VILLAGE<br />'
        });
var format_cours_deau_3 = new ol.format.GeoJSON();
var features_cours_deau_3 = format_cours_deau_3.readFeatures(json_cours_deau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cours_deau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cours_deau_3.addFeatures(features_cours_deau_3);
var lyr_cours_deau_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cours_deau_3, 
                style: style_cours_deau_3,
                interactive: true,
    title: 'cours_deau<br />\
    <img src="styles/legend/cours_deau_3_0.png" /> CANAL_IRRIGATION<br />\
    <img src="styles/legend/cours_deau_3_1.png" /> FLEUVE<br />\
    <img src="styles/legend/cours_deau_3_2.png" /> RIVIERE<br />\
    <img src="styles/legend/cours_deau_3_3.png" /> RUISSEAU<br />'
        });
var format_aire_protegee_4 = new ol.format.GeoJSON();
var features_aire_protegee_4 = format_aire_protegee_4.readFeatures(json_aire_protegee_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aire_protegee_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aire_protegee_4.addFeatures(features_aire_protegee_4);
var lyr_aire_protegee_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_aire_protegee_4, 
                style: style_aire_protegee_4,
                interactive: true,
                title: '<img src="styles/legend/aire_protegee_4.png" /> aire_protegee'
            });
var format_route_5 = new ol.format.GeoJSON();
var features_route_5 = format_route_5.readFeatures(json_route_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_route_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_route_5.addFeatures(features_route_5);
var lyr_route_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_route_5, 
                style: style_route_5,
                interactive: true,
    title: 'route<br />\
    <img src="styles/legend/route_5_0.png" /> BITUME<br />\
    <img src="styles/legend/route_5_1.png" /> NON_REVETU<br />\
    <img src="styles/legend/route_5_2.png" /> PAVE<br />'
        });
var format_LIM_DJIJA_6 = new ol.format.GeoJSON();
var features_LIM_DJIJA_6 = format_LIM_DJIJA_6.readFeatures(json_LIM_DJIJA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIM_DJIJA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIM_DJIJA_6.addFeatures(features_LIM_DJIJA_6);
var lyr_LIM_DJIJA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIM_DJIJA_6, 
                style: style_LIM_DJIJA_6,
                interactive: true,
                title: '<img src="styles/legend/LIM_DJIJA_6.png" /> LIM_DJIJA'
            });
var format_sol_nu_7 = new ol.format.GeoJSON();
var features_sol_nu_7 = format_sol_nu_7.readFeatures(json_sol_nu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sol_nu_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sol_nu_7.addFeatures(features_sol_nu_7);
var lyr_sol_nu_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sol_nu_7, 
                style: style_sol_nu_7,
                interactive: true,
                title: '<img src="styles/legend/sol_nu_7.png" /> sol_nu'
            });

lyr_zone_de_vegetation_0.setVisible(true);lyr_LIM_ABOMEY_1.setVisible(true);lyr_localite_2.setVisible(true);lyr_cours_deau_3.setVisible(true);lyr_aire_protegee_4.setVisible(true);lyr_route_5.setVisible(true);lyr_LIM_DJIJA_6.setVisible(true);lyr_sol_nu_7.setVisible(true);
var layersList = [lyr_zone_de_vegetation_0,lyr_LIM_ABOMEY_1,lyr_localite_2,lyr_cours_deau_3,lyr_aire_protegee_4,lyr_route_5,lyr_LIM_DJIJA_6,lyr_sol_nu_7];
lyr_zone_de_vegetation_0.set('fieldAliases', {'type': 'type', 'source': 'source', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_LIM_ABOMEY_1.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'DEPART': 'DEPART', });
lyr_localite_2.set('fieldAliases', {'nom_loc': 'nom_loc', 'type': 'type', 'statut_adm': 'statut_adm', 'commune': 'commune', 'arrondisst': 'arrondisst', 'village_ad': 'village_ad', 'nom_enq': 'nom_enq', 'nom_50k': 'nom_50k', 'nom_200k': 'nom_200k', 'nom_600k': 'nom_600k', 'nom_assemb': 'nom_assemb', 'nom_sbee': 'nom_sbee', 'nom_dgeau': 'nom_dgeau', 'nom_insae': 'nom_insae', 'autre_nom': 'autre_nom', 'gendarm': 'gendarm', 'police': 'police', 'pompiers': 'pompiers', 'douane': 'douane', 'hopital': 'hopital', 'autre_san': 'autre_san', 'code_geo': 'code_geo', 'source': 'source', 'ens_sup': 'ens_sup', 'ens_sec': 'ens_sec', 'marche': 'marche', 'poste': 'poste', 'population': 'population', });
lyr_cours_deau_3.set('fieldAliases', {'nom_ce': 'nom_ce', 'nom_50k': 'nom_50k', 'nom_200k': 'nom_200k', 'nom_enq': 'nom_enq', 'autre_nom': 'autre_nom', 'type': 'type', 'regime': 'regime', 'arbres': 'arbres', 'source': 'source', 'nom_600k': 'nom_600k', 'shape_leng': 'shape_leng', 'trace': 'trace', });
lyr_aire_protegee_4.set('fieldAliases', {'type': 'type', 'nom_ap': 'nom_ap', 'nom_50k': 'nom_50k', 'nom_200k': 'nom_200k', 'nom_enq': 'nom_enq', 'source': 'source', 'nom_600k': 'nom_600k', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_route_5.set('fieldAliases', {'NUM_ROUTE': 'NUM_ROUTE', 'TYPE': 'TYPE', 'CL_ADMIN': 'CL_ADMIN', 'REVETEMENT': 'REVETEMENT', 'PRATICAB': 'PRATICAB', 'CHAUSSEE_S': 'CHAUSSEE_S', 'VOIE_LOCAL': 'VOIE_LOCAL', 'FRANCHISST': 'FRANCHISST', 'SOURCE': 'SOURCE', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr_LIM_DJIJA_6.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'DEPART': 'DEPART', });
lyr_sol_nu_7.set('fieldAliases', {'source': 'source', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_zone_de_vegetation_0.set('fieldImages', {'type': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_LIM_ABOMEY_1.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'DEPART': 'TextEdit', });
lyr_localite_2.set('fieldImages', {'nom_loc': 'TextEdit', 'type': 'TextEdit', 'statut_adm': 'TextEdit', 'commune': 'TextEdit', 'arrondisst': 'TextEdit', 'village_ad': 'TextEdit', 'nom_enq': 'TextEdit', 'nom_50k': 'TextEdit', 'nom_200k': 'TextEdit', 'nom_600k': 'TextEdit', 'nom_assemb': 'TextEdit', 'nom_sbee': 'TextEdit', 'nom_dgeau': 'TextEdit', 'nom_insae': 'TextEdit', 'autre_nom': 'TextEdit', 'gendarm': 'TextEdit', 'police': 'TextEdit', 'pompiers': 'TextEdit', 'douane': 'TextEdit', 'hopital': 'TextEdit', 'autre_san': 'TextEdit', 'code_geo': 'TextEdit', 'source': 'TextEdit', 'ens_sup': 'TextEdit', 'ens_sec': 'TextEdit', 'marche': 'TextEdit', 'poste': 'TextEdit', 'population': 'TextEdit', });
lyr_cours_deau_3.set('fieldImages', {'nom_ce': 'TextEdit', 'nom_50k': 'TextEdit', 'nom_200k': 'TextEdit', 'nom_enq': 'TextEdit', 'autre_nom': 'TextEdit', 'type': 'TextEdit', 'regime': 'TextEdit', 'arbres': 'TextEdit', 'source': 'TextEdit', 'nom_600k': 'TextEdit', 'shape_leng': 'TextEdit', 'trace': 'TextEdit', });
lyr_aire_protegee_4.set('fieldImages', {'type': 'TextEdit', 'nom_ap': 'TextEdit', 'nom_50k': 'TextEdit', 'nom_200k': 'TextEdit', 'nom_enq': 'TextEdit', 'source': 'TextEdit', 'nom_600k': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_route_5.set('fieldImages', {'NUM_ROUTE': 'TextEdit', 'TYPE': 'TextEdit', 'CL_ADMIN': 'TextEdit', 'REVETEMENT': 'TextEdit', 'PRATICAB': 'TextEdit', 'CHAUSSEE_S': 'TextEdit', 'VOIE_LOCAL': 'TextEdit', 'FRANCHISST': 'TextEdit', 'SOURCE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', });
lyr_LIM_DJIJA_6.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'DEPART': 'TextEdit', });
lyr_sol_nu_7.set('fieldImages', {'source': '', 'shape_leng': '', 'shape_area': '', });
lyr_zone_de_vegetation_0.set('fieldLabels', {'type': 'header label', 'source': 'header label', 'shape_leng': 'header label', 'shape_area': 'header label', });
lyr_LIM_ABOMEY_1.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'DEPART': 'no label', });
lyr_localite_2.set('fieldLabels', {'nom_loc': 'header label', 'type': 'header label', 'statut_adm': 'header label', 'commune': 'header label', 'arrondisst': 'header label', 'village_ad': 'header label', 'nom_enq': 'header label', 'nom_50k': 'header label', 'nom_200k': 'header label', 'nom_600k': 'header label', 'nom_assemb': 'header label', 'nom_sbee': 'header label', 'nom_dgeau': 'header label', 'nom_insae': 'header label', 'autre_nom': 'header label', 'gendarm': 'header label', 'police': 'header label', 'pompiers': 'header label', 'douane': 'header label', 'hopital': 'header label', 'autre_san': 'header label', 'code_geo': 'header label', 'source': 'header label', 'ens_sup': 'header label', 'ens_sec': 'header label', 'marche': 'header label', 'poste': 'header label', 'population': 'header label', });
lyr_cours_deau_3.set('fieldLabels', {'nom_ce': 'header label', 'nom_50k': 'header label', 'nom_200k': 'header label', 'nom_enq': 'header label', 'autre_nom': 'header label', 'type': 'header label', 'regime': 'header label', 'arbres': 'header label', 'source': 'header label', 'nom_600k': 'header label', 'shape_leng': 'header label', 'trace': 'header label', });
lyr_aire_protegee_4.set('fieldLabels', {'type': 'header label', 'nom_ap': 'header label', 'nom_50k': 'header label', 'nom_200k': 'header label', 'nom_enq': 'header label', 'source': 'header label', 'nom_600k': 'header label', 'shape_leng': 'header label', 'shape_area': 'header label', });
lyr_route_5.set('fieldLabels', {'NUM_ROUTE': 'header label', 'TYPE': 'header label', 'CL_ADMIN': 'header label', 'REVETEMENT': 'header label', 'PRATICAB': 'header label', 'CHAUSSEE_S': 'header label', 'VOIE_LOCAL': 'header label', 'FRANCHISST': 'header label', 'SOURCE': 'header label', 'SHAPE_LENG': 'header label', });
lyr_LIM_DJIJA_6.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'DEPART': 'no label', });
lyr_sol_nu_7.set('fieldLabels', {'source': 'header label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_sol_nu_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});