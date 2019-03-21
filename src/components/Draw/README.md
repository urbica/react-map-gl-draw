```jsx
<div>
    <MapGL
      style={{ width: "100%", height: "400px" }}
      mapStyle="mapbox://styles/mapbox/light-v9"
      accessToken={MAPBOX_ACCESS_TOKEN}
      latitude={37.78}
      longitude={-122.41}
      zoom={11}
    >
      <Draw />
    </MapGL>
</div>
```
