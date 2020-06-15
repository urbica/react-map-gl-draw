```js
import React, { useState } from 'react';
import MapGL from '@urbica/react-map-gl';
import Draw from '@urbica/react-map-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const [data, setData] = useState({
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [-122.41411987304815, 37.792209769935084],
        type: 'Point'
      }
    }
  ]
});

<>
  <MapGL
    style={{ width: '100%', height: '400px' }}
    mapStyle='mapbox://styles/mapbox/light-v9'
    accessToken={MAPBOX_ACCESS_TOKEN}
    latitude={37.78}
    longitude={-122.41}
    zoom={11}
  >
    <Draw data={data} onChange={(data) => setData(data)} />
  </MapGL>
  <pre>{JSON.stringify(data, null, 2)}</pre>
</>;
```
