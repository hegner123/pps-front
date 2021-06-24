const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
      port: 8080,
      historyApiFallback: true,
      hot: true,
      compress: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },{
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },

    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    },
    optimization: {
      minimize: true,
    }

    }


