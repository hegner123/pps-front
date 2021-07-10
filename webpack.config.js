const path = require("path");

(module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
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
        loader: "babel-loader",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  externals: {
    config: JSON.stringify({
      apiUrl: "http://localhost:4000",
    }),
  },
  optimization: {
    minimize: true,
  },
}),
  {
    mode: "production",
    resolve: {
      extensions: [".js", ".jsx"],
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
          loader: "babel-loader",
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },

    externals: {
      config: JSON.stringify({
        apiUrl: "/api",
      }),
    },
    optimization: {
      minimize: true,
    },
  };
