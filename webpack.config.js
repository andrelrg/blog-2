const path = require('path');

module.exports = {
    entry: './pages/index.js',
    module: {
        rules: [{
            test: /\.(jpe?g|gif|png|ico)$/i,
            use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            }
          ]
        }],
    },
};