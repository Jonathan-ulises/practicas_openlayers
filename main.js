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
            extent: [
                -13424929.347505514, 
                1287199.7496701013, 
                -9535813.348355746, 
                3831024.0510007674
            ]
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
                extent: [
                    -13424929.347505514, 
                    1287199.7496701013, 
                    -9535813.348355746, 
                    3831024.0510007674
                ],
                opacity: 0.5
            })
        ],
        // Target
        target: "js-map",
    });

    // Layer Group
    const layerGroup = new ol.layer.Group({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
                }),
                zIndex: 0,
                visible: true,
                extent: [
                    -13424929.347505514, 
                    1287199.7496701013, 
                    -9535813.348355746, 
                    3831024.0510007674
                ],
                opacity: 0.5
            })
        ]
    })

    map.addLayer(layerGroup);

    map.on('click', (e) => {
        console.log(e.coordinate);
    })
}

window.onload = init();