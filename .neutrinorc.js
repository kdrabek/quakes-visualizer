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
    ]
  ],
  options: {
    tests: '/src'
  },
};
