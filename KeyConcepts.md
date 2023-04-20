
# Conseptos Clava de OpenLayers
# Map
## View
Representa una vista 2D del mapa. El objeto View ayuda a especificar el centro, la resolucion y rotacion del mapa. Una vista es una proyeccion.
La proyeccion determina el sistema de coordenadas del centro, y sus unidades determinan las unidades de la resolucion (unidad de proyeccion por pixel). La proyeccion por defecto es Web Mercator (EPSG:3857).

## Layer
Provee las diferentes alternativas de obtener informacion geoespacial y poder visualziarla en un mapa, puede ser raster o vectorial.

Raster data se refiere a una composicion de imagenes digitales, estas pueden ser satelitales, fotos tomadas con drones, etc. Son exceletes para visualizacion de datos continuos. Estos usan tiles (teselas), que son diviciones cuadradas de un mapa, ayudan a no perder calidad de imagen al hacer zoom a un mapa

Vector data se refiere a figuras geometricas como puntos, lineas y poligonos. Representan una capa vectorial usando coordenadas X y Y. Son excelentes para visualizar limites (fronteras).


## Overlay
Es usado para visualizar datos geoespaciales de una locacion especifica. Normalmente se usa para mostrar informacion flotante sobre el mapa (pop up dialog)

## Map Interaction
Al mapa se le pueden configurar interacciones con el mapa, estas no son interacciones con UI.
Solo interacciones con el mouse, finger touch.
Las interacciones se puede definir con la condicion de teclas necesarias para poder usarlas. Estas teclas se conbinan con el uso del mouse para hacer la interaccion.

##  Map Controls
Controles que nos permiten interactuar con el mapa y usan interfaces de usuario como botones.