# Layers en Open Layers

## Raster Layer
Una capa Raster son imagenes PNG o JPEG de un mapa, existen dos categorias  de raster, el tiled y el untiled.

### Raster Tiled
El raster tiled se compone de cuadriculados regulares divididos con pequeñas porciones del mapa.
Las secciones de mapa se actualiza cuando ocurre un acercamiento o alejamiento en el mapa. Al acercarce, estas representan una mejor imagen y cargan mas detalles mientras mas se acerca el mapa. Cuando se aleja el mapa, los detalles desaparecen para mostrar algo mas simple y ligero

### Raster Untiled
El raster untiled se compone de una sola imagen del mapa.

# BaseLayer
* BaseLayer
    * Layer
        * BaseImageLayer
        * BaseTileLayer
        * BaseVectorLayer
    * LayerGroup