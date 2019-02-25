import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import MapGL from '@urbica/react-map-gl';

global.MapGL = MapGL;
global.MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
