# Urbica React Draw tools for Mapbox GL JS

React Component to enhance [Urbica's React Map GL](https://github.com/urbica/react-map-gl) to use Mapbox Draw tools.

[Mapbox Draw tools](https://github.com/mapbox/mapbox-gl-draw) adds support for drawing and editing features on [mapbox-gl.js](https://github.com/mapbox/mapbox-gl-js) maps.

- [Examples](#examples)
- [Development](#development)

## Installation

    npm i mapbox-gl @mapbox/mapbox-gl-draw @urbica/react-map-gl @urbica/react-map-gl-draw

## Examples

You can see examples & documentation [here](https://urbica.github.io/react-map-gl-draw/).

## Development
Install dependencies
    
    npm install    

Then start `react-styleguidist` by running

    MAPBOX_ACCESS_TOKEN=<TOKEN> npm start

where `<TOKEN>` is a valid Mapbox [access token](https://www.mapbox.com/help/define-access-token/) or you can add it to `.env` 
        
    cp example.env .env
    
and start `react-styleguidist` by running

    npm start
