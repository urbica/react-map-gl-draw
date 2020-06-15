```js
import React, { useState } from 'react';
import MapGL from '@urbica/react-map-gl';
import Draw from '@urbica/react-map-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const [mode, setMode] = useState('simple_select');

<>
  <div>Mode: {mode}</div>
  <div>
    <button onClick={() => setMode('simple_select')}>simple_select</button>
    <button onClick={() => setMode('draw_line_string')}>draw_line_string</button>
    <button onClick={() => setMode('draw_polygon')}>draw_polygon</button>
    <button onClick={() => setMode('draw_point')}>draw_point</button>
  </div>
  <MapGL
    style={{ width: '100%', height: '400px' }}
    mapStyle='mapbox://styles/mapbox/light-v9'
    accessToken={MAPBOX_ACCESS_TOKEN}
    latitude={37.78}
    longitude={-122.41}
    zoom={11}
  >
    <Draw mode={mode} onDrawModeChange={({ mode }) => setMode(mode)} />
  </MapGL>
</>;
```
