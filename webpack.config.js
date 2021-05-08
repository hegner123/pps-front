const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        // inline: false,
        // contentBase: "./dist",
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },{
                test: /\.svg$/,
                use: [
                {
                    loader: 'svg-url-loader',
                    options: {
                    limit: 10000,
                    },
                },
                ]
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
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
],

    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    },
    node: {
        fs: 'empty'
      }
}

