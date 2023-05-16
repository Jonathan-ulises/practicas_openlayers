
const attributionControl = new ol.control.Attribution({
    collapsible: true
})

const init = () => {

    // Create a map object
    const map = new ol.Map({
        // View
        view: new ol.View({
            center: [-12080385,7567433], // center of view
            zoom: 3,
            /*
            El extends en la configuracion inicial deel mapa, establece
            el espacio visible total de las capas, especificando
            de manera rectangular.
            */
            // extent: [
            //     -13424929.347505514, 
            //     1287199.7496701013, 
            //     -9535813.348355746, 
            //     3831024.0510007674
            // ]
        }),
        //Layers
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(), // OSM -> OpenStreetMap
                zIndex: 1,
                visible: true,
                /*
                extent: [Xmin, Ymin, Xmax, Ymax]

                hace una especie de corte rectangular a la capa usando
                las coordenadas especificadas.
                Si existe una capa inferior, se logra un efecto de mapa diferente
                para esa seccion
                */
                // extent: [
                //     -13424929.347505514, 
                //     1287199.7496701013, 
                //     -9535813.348355746, 
                //     3831024.0510007674
                // ],
                // opacity: 0.5
                opacity: 1
            })
        ],
        // Target
        target: "js-map",
        controls: ol.control.defaults({attribution: false}).extend([attributionControl])
    });

    // Layer Group
    const layerGroup = new ol.layer.Group({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
                }),
                zIndex: 0,
                visible: false,
                extent: [
                    -13424929.347505514, 
                    1287199.7496701013, 
                    -9535813.348355746, 
                    3831024.0510007674
                ],
                opacity: 0.5
            }),
            // Bing Maps Basemap Layer
            new ol.layer.Tile({
                source: new ol.source.BingMaps({
                    key: 'ArAgLEHRfl7WKapNubsPQf6XKRjKdfFzTOc4sAUwkAheJikVlCnCloTXmNjDeYVn',
                    imagerySet: 'AerialWithLabels', // Aerial, AerialWithLabels, Road, CanvasDark, CanvasGray
                }),
                visible: true
            })
        ]
    })

    map.addLayer(layerGroup);

    // CartoDB BaseMap Layer
    const cartoDBBaseLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://{1-4}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{scale}.png',
            attributions: '@ CARTO'
        }),
        visible: true
    });

    map.addLayer(cartoDBBaseLayer);

    // TileDebug
    const tileDebugLayer = new ol.layer.Tile({
        source: new ol.source.TileDebug(),
        visible: false
    });

    map.addLayer(tileDebugLayer);

    // Stamen basemap Layer
    const stamenBaseLayer = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'terrain-labels',
            attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        }),
        visible: true
    });

    map.addLayer(stamenBaseLayer)

    const stamenBaseMapLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
            attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        }),
        visible: false
    })

    map.addLayer(stamenBaseMapLayer)

    // tile ArcGIS REST API Layer (NO FUNCIONA)
//   const tileArcGISLayer = new ol.layer.Tile({
//     source: new ol.source.TileArcGISRest({
//       url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_LandRecords_Louisville/MapServer"
//     }),
//     visible: true
//   })
//   map.addLayer(tileArcGISLayer);

    // NOAA WMS Layer (NO FUNCIONA)
    // const NOAAWMSLayer = new ol.layer.Tile({
    //     source: new ol.source.TileWMS({
    //         url: 'https://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer?',
    //         params: {
    //             LAYERS: 5,
    //             FORMAT: 'image/png',
    //             TRANSPARENT: true
    //         },
    //         attributions: '<a href=https://nowcoast.noaa.gov/>© NOAA<a/>'
    //     })
    // })
    // map.addLayer(NOAAWMSLayer);

    // map.on('click', (e) => {
    //     console.log(e.coordinate);
    // })
}

window.onload = init();