import { PureComponent, createElement } from 'react';
import { MapContext } from '@urbica/react-map-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw';

class Draw extends PureComponent {
  componentDidMount() {
    const map = this._map;
    const draw = new MapboxDraw();

    map.addControl(draw);
  }

  render() {
    return createElement(MapContext.Consumer, {}, (map) => {
      if (map) {
        this._map = map;
      }
      return null;
    });
  }
}

export default Draw;
