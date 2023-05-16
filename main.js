
// Attribution control
const attributionControl = new ol.control.Attribution({
    collapsible: true
});





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
        // Target
        target: "js-map",
        controls: ol.control.defaults({attribution: false}).extend([attributionControl])
    });

    // BASE LAYERS
    // OpenStreet Map Standard
    const openStreetMapStandardLayer = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
        title: 'OMStandard'
    });

    const openStreetMapHumanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }),
        visible: false,
        title: 'OMSHumanitarian'
    });

    // Bing Maps Basemap Layer
    const bingMaps = new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: 'ArAgLEHRfl7WKapNubsPQf6XKRjKdfFzTOc4sAUwkAheJikVlCnCloTXmNjDeYVn',
            imagerySet: 'AerialWithLabels', // Aerial, AerialWithLabels, Road, CanvasDark, CanvasGray
        }),
        visible: false,
        title: 'BingMaps'
    })

    // CartoDB BaseMap Layer
    const cartoDBBaseLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://{1-4}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{scale}.png',
            attributions: '@ CARTO'
        }),
        visible: false,
        title: 'CartoDarkAll'
    });

    // Stamen basemap Layer
    const stamenBaseLayer = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'terrain-labels',
            attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        }),
        visible: false,
        title: 'StamenTerrainWithLabels'
    });

    const stamenBaseMapLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
            attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        }),
        visible: false,
        title: 'StamenToner'
    })

    // Layer Group
    const baseLayerGroup = new ol.layer.Group({
        layers: [
            openStreetMapStandardLayer,
            openStreetMapHumanitarian,
            bingMaps,
            cartoDBBaseLayer,
            stamenBaseLayer,
            stamenBaseMapLayer
        ]
    })

    map.addLayer(baseLayerGroup);

    // Layer Switcher logic for BaseLayers
    const baseLayerElements = document.querySelectorAll('.sidebar > input[type=radio]');
    for(let baseLayerElement of baseLayerElements) {
        baseLayerElement.addEventListener('change', ({target}) => {
            const baseLayerElementValue = target.value;
            baseLayerGroup.getLayers().forEach((element, index, array) => {
                const baseLayerName = element.get('title');
                element.setVisible(baseLayerName === baseLayerElementValue)
            })
        })
    }

    const openStreetMapFragmentStatic = new ol.layer.Image({
        source: new ol.source.ImageStatic({
           url: './data/meme.jpeg',
           imageExtends: [-25036552.780723654, 3758126.8986177184, -23788650.58167784, 5009845.312339512],
           attributions: '@MEME DE LOS GODS'
        }),
        title: 'openstreetMapFragmentStatic'
    });

    map.addLayer(openStreetMapFragmentStatic)

    map.on('click', (e) => {
        console.log(e.coordinate)
    })

    // TileDebug
    const tileDebugLayer = new ol.layer.Tile({
        source: new ol.source.TileDebug(),
        visible: true
    });
    map.addLayer(tileDebugLayer)

}

window.onload = init();