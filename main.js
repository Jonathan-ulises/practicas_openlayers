const init = () => {

    // Controls
    const fullScreenControl = new ol.control.FullScreen();
    const mousePosition = new ol.control.MousePosition();
    const overViewMapControl = new ol.control.OverviewMap({
        collapsed: false,
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ]
    });

    const scaleLineControl = new ol.control.ScaleLine();
    const zoomSlider = new ol.control.ZoomSlider();
    const zoomToExtentControl = new ol.control.ZoomToExtent();

    // Create a map object
    const map = new ol.Map({
        // View
        view: new ol.View({
            center: [-12080385,7567433], // center of view
            zoom: 3,
            maxZoom: 12,
            minZoom: 2,
            rotation: 0 // radiants
        }),
        //Layers
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM() // OSM -> OpenStreetMap
            })
        ],
        // Target
        target: "js-map",
        keyboardEventTarget: document,
        controls: ol.control.defaults().extend([
            fullScreenControl,
            mousePosition,
            overViewMapControl,
            scaleLineControl,
            zoomSlider,
            zoomToExtentControl,
        ])
    });

    // Overlay
    const popupContainerElement = document.querySelector('#popup-coordinates');
    const popup = new ol.Overlay({
        element: popupContainerElement,
        positioning: 'center-left'
    });
    map.addOverlay(popup)

    // Evento
    map.on('click', (e) => {
        const clickedCoordinate = e.coordinate;
        popup.setPosition(undefined);
        popup.setPosition(clickedCoordinate);
        popupContainerElement.innerHTML = clickedCoordinate;
    })

    // DragRotate Interaction
    const dragRotateInteraction = new ol.interaction.DragRotate({
        condition: ol.events.condition.altKeyOnly
    });
    map.addInteraction(dragRotateInteraction)

    // Drawing interaction
    const drawInteraction = new ol.interaction.Draw({
        type: 'Polygon',
        freehand: true
    });

    drawInteraction.on('drawend', (e) => {
        let parser = new ol.format.GeoJSON();
        let drwaFeatures = parser.writeFeaturesObject([e.feature])
        console.log(drwaFeatures.features[0].geometry.coordinates)
    })

    map.addInteraction(drawInteraction)
}

window.onload = init();