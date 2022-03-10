var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_StamenTonerLiteOSM_1 = new ol.layer.Tile({
            'title': 'Stamen Toner Lite/OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
            })
        });

        var lyr_StamenTerrainUSAOSM_2 = new ol.layer.Tile({
            'title': 'Stamen Terrain-USA/OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.png'
            })
        });
var format_s_quartiers_historiques_3 = new ol.format.GeoJSON();
var features_s_quartiers_historiques_3 = format_s_quartiers_historiques_3.readFeatures(json_s_quartiers_historiques_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_s_quartiers_historiques_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_s_quartiers_historiques_3.addFeatures(features_s_quartiers_historiques_3);
var lyr_s_quartiers_historiques_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_s_quartiers_historiques_3, 
                style: style_s_quartiers_historiques_3,
                interactive: true,
                title: '<img src="styles/legend/s_quartiers_historiques_3.png" /> s_quartiers_historiques'
            });
var format_p_sites_touristiques_4 = new ol.format.GeoJSON();
var features_p_sites_touristiques_4 = format_p_sites_touristiques_4.readFeatures(json_p_sites_touristiques_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p_sites_touristiques_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p_sites_touristiques_4.addFeatures(features_p_sites_touristiques_4);
var lyr_p_sites_touristiques_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_p_sites_touristiques_4, 
                style: style_p_sites_touristiques_4,
                interactive: true,
                title: '<img src="styles/legend/p_sites_touristiques_4.png" /> p_sites_touristiques'
            });
var format_p_liste_patrimoine_unesco_vietnam_5 = new ol.format.GeoJSON();
var features_p_liste_patrimoine_unesco_vietnam_5 = format_p_liste_patrimoine_unesco_vietnam_5.readFeatures(json_p_liste_patrimoine_unesco_vietnam_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p_liste_patrimoine_unesco_vietnam_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p_liste_patrimoine_unesco_vietnam_5.addFeatures(features_p_liste_patrimoine_unesco_vietnam_5);
var lyr_p_liste_patrimoine_unesco_vietnam_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_p_liste_patrimoine_unesco_vietnam_5, 
                style: style_p_liste_patrimoine_unesco_vietnam_5,
                interactive: true,
                title: '<img src="styles/legend/p_liste_patrimoine_unesco_vietnam_5.png" /> p_liste_patrimoine_unesco_vietnam'
            });
var group_Fond_carto = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_StamenTonerLiteOSM_1,lyr_StamenTerrainUSAOSM_2,lyr_s_quartiers_historiques_3,],
                                title: "Fond_carto"});

lyr_OpenStreetMap_0.setVisible(true);lyr_StamenTonerLiteOSM_1.setVisible(true);lyr_StamenTerrainUSAOSM_2.setVisible(true);lyr_s_quartiers_historiques_3.setVisible(true);lyr_p_sites_touristiques_4.setVisible(true);lyr_p_liste_patrimoine_unesco_vietnam_5.setVisible(true);
var layersList = [group_Fond_carto,lyr_p_sites_touristiques_4,lyr_p_liste_patrimoine_unesco_vietnam_5];
lyr_s_quartiers_historiques_3.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'descriptio': 'descriptio', 'lien_img': 'lien_img', 'ville': 'ville', });
lyr_p_sites_touristiques_4.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'descriptio': 'descriptio', 'lien_img': 'lien_img', 'ville': 'ville', 'type': 'type', });
lyr_p_liste_patrimoine_unesco_vietnam_5.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Image': 'Image', 'Texte': 'Description', });
lyr_s_quartiers_historiques_3.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'descriptio': 'TextEdit', 'lien_img': 'TextEdit', 'ville': '', });
lyr_p_sites_touristiques_4.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'descriptio': 'TextEdit', 'lien_img': 'TextEdit', 'ville': 'TextEdit', 'type': '', });
lyr_p_liste_patrimoine_unesco_vietnam_5.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'Image': 'ExternalResource', 'Texte': 'TextEdit', });
lyr_s_quartiers_historiques_3.set('fieldLabels', {});
lyr_p_sites_touristiques_4.set('fieldLabels', {'id': 'no label', 'nom': 'no label', 'descriptio': 'no label', 'lien_img': 'no label', 'ville': 'no label', 'type': 'no label', });
lyr_p_liste_patrimoine_unesco_vietnam_5.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', 'Image': 'no label', 'Texte': 'no label', });
lyr_p_liste_patrimoine_unesco_vietnam_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});