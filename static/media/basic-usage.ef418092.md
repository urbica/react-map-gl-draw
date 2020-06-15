```js
import React, { useState } from 'react';
import MapGL from '@urbica/react-map-gl';
import Draw from '@urbica/react-map-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const [_, setFeatures] = useState([]);

<>
  <MapGL
    style={{ width: '100%', height: '400px' }}
    mapStyle='mapbox://styles/mapbox/light-v9'
    accessToken={MAPBOX_ACCESS_TOKEN}
    latitude={37.78}
    longitude={-122.41}
    zoom={11}
  >
    <Draw
      onDrawCreate={({ features }) => setFeatures({ features })}
      onDrawUpdate={({ features }) => setFeatures({ features })}
    />
  </MapGL>
  <div>{JSON.stringify(state.features)}</div>
</>;
```
