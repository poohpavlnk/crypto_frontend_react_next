const withCSS = require('@zeit/next-css')
const withImages = require('next-images');

module.exports = withImages(
  withCSS({
    exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/contact': { page: '/contact' },
        '/login': { page: '/login' },
        '/register': { page: '/register' },
        '/blank-page': { page: '/blank-page' },
      };
    },
    publicRuntimeConfig: {
      localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
    },
    webpack: (config, options) => {
      cssModules: true,
      //      config.module.rules.push({
      //          enforce: 'pre',
      //          test: /\.js?$/,
      //          exclude: [/node_modules/],
      //          loader: 'eslint-loader',
      //          options: {
      //            quiet: true,
      //          }
      //      });
      config.node = {
        fs: 'empty'
      }
      return config;
    },
  })
);
# Change 3 on 2020-04-29
# Change 3 on 2020-04-30
# Change 1 on 2020-05-10
# Change 3 on 2020-05-10
# Change 1 on 2020-05-07
# Change 0 on 2023-02-13
# Change 0 on 2023-03-05
# Change 1 on 2023-03-14
# Change 0 on 2023-03-15
