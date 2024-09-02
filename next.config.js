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
# Change 1 on 2023-03-20
# Change 3 on 2023-05-29
# Change 0 on 2023-06-18
# Change 0 on 2023-06-20
# Change 0 on 2023-07-26
# Change 1 on 2023-09-11
# Change 1 on 2023-09-13
# Change 1 on 2023-10-26
# Change 2 on 2023-11-23
# Change 0 on 2023-11-30
# Change 0 on 2024-02-06
# Change 1 on 2024-02-26
# Change 0 on 2024-02-29
# Change 3 on 2024-03-03
# Change 1 on 2024-03-04
# Change 1 on 2024-03-11
# Change 0 on 2024-03-13
# Change 1 on 2024-04-01
# Change 2 on 2024-04-01
# Change 0 on 2024-05-01
# Change 1 on 2024-06-02
# Change 0 on 2024-06-04
# Change 0 on 2024-06-09
# Change 1 on 2024-06-09
# Change 0 on 2024-06-13
# Change 0 on 2024-07-02
# Change 1 on 2024-07-10
# Change 0 on 2024-07-31
# Change 0 on 2024-08-28
# Change 2 on 2024-08-28
# Change 1 on 2024-09-02
