const { join } = require('path');

module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'earthquake'
        }
      }
    ],
    [
      '@neutrinojs/jest', {
        setupFiles: [
          '<rootDir>/jest.config.js'
        ],
        snapshotSerializers: [
          require.resolve('enzyme-to-json/serializer')
        ]
      }
    ],
    ['neutrino-middleware-html-template', {
      title: 'earthquake browser',
      links: [
        {
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          rel: 'stylesheet'
        },
        {
          href: 'https://unpkg.com/react-rangeslider/umd/rangeslider.min.css',
          rel: 'stylesheet'
        },
        {
          href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
          rel: 'stylesheet'
        }
      ]
    }],
  ],
  options: {
    tests: '/src'
  },
};
