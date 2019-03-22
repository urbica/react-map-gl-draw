const path = require('path');
const webpack = require('webpack');

module.exports = {
  title: 'Urbica React Map GL Draw',
  moduleAliases: {
    '@urbica/react-map-gl-draw': path.resolve(__dirname, 'src')
  },
  require: [path.resolve(__dirname, 'styleguide.setup.js')],
  sections: [
    {
      name: 'Examples',
      components: () => [
        'docs/basic-usage.md',
        'docs/set-initial-features.md',
        'docs/change-mode.md'
      ],
      exampleMode: 'expand'
    },
    {
      name: 'Props',
      components: 'src/components/**/index.js',
      usageMode: 'expand'
    }
  ],
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
