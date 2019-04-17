```js
import React from 'react';
import MapGL from '@urbica/react-map-gl';
import Draw from '@urbica/react-map-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';  

initialState = {
  mode: 'simple_select'
};

<>
  <div>Mode: {state.mode}</div>
  <div>
    <button onClick={() => setState({ mode: 'simple_select' })}>simple_select</button>
    <button onClick={() => setState({ mode: 'draw_line_string' })}>draw_line_string</button>
    <button onClick={() => setState({ mode: 'draw_polygon' })}>draw_polygon</button>
    <button onClick={() => setState({ mode: 'draw_point' })}>draw_point</button>
  </div>
  <MapGL
    style={{ width: "100%", height: "400px" }}
    mapStyle="mapbox://styles/mapbox/light-v9"
    accessToken={MAPBOX_ACCESS_TOKEN}
    latitude={37.78}
    longitude={-122.41}
    zoom={11}
  >
    <Draw
        mode={state.mode}
        onDrawModeChange={({ mode }) => setState({ mode })}
    />
  </MapGL>
</>
```
