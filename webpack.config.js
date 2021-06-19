const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');




module.exports = {

    mode: 'development',
    context: path.resolve(__dirname),
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
      port: 8080,
      historyApiFallback: true,
      hot: true,
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
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})
],
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    },

    }


