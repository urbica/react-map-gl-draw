const path = require('path');
const webpack = require('webpack');

module.exports = {
  require: [path.resolve(__dirname, 'styleguide.setup.js')],
  dangerouslyUpdateWebpackConfig: (webpackConfig) => {
    const envPlugin = new webpack.EnvironmentPlugin(['MAPBOX_ACCESS_TOKEN']);
    webpackConfig.plugins.push(envPlugin);
    // eslint-disable-next-line
    webpackConfig.output = {
      ...webpackConfig.output,
      publicPath: process.env.PUBLIC_URL || ''
    };

    return webpackConfig;
  }
};
