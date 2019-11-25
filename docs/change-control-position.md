```js
import React from 'react';
import MapGL from '@urbica/react-map-gl';
import Draw from '@urbica/react-map-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';  

initialState = {
  data: {
    type: "FeatureCollection",
    features: [{
      type: "Feature",
      properties:{},
      geometry: {
        coordinates: [
          -122.41411987304815,
          37.792209769935084
        ],
      type: "Point"
      }
    }]
  },
  position: 'top-left'
};

<>
  <select onChange={(e) => setState({position: e.target.value})}>
    <option value="top-left">top-left</option>
    <option value="top-right">top-right</option>
  </select>
  <MapGL
    style={{ width: "100%", height: "400px" }}
    mapStyle="mapbox://styles/mapbox/light-v9"
    accessToken={MAPBOX_ACCESS_TOKEN}
    latitude={37.78}
    longitude={-122.41}
    zoom={11}
  >
    <Draw
      data={state.data}
      onChange={(data) => setState({data})}
      position={state.position}
    />
  </MapGL>
  <div>
    {JSON.stringify(state.data)}
  </div>
</>
```
