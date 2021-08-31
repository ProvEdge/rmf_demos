const webpack = require("webpack");
const resolve = require("path").resolve;
const dotenv = require("dotenv");

const config = {
  entry: {
    app: resolve(__dirname, "src/index.tsx"),
    //// NOTE: these are not necessary
    // panels: resolve(__dirname, 'src/components/panels-container'),
    // rosClock: resolve(__dirname, 'src/components/fixed-components/rostime-clock'),
    // cleaningForm: resolve(__dirname, 'src/components/forms/cleaning-form'),
    // deliveryForm: resolve(__dirname, 'src/components/forms/delivery-form'),
    // loopRequestForm: resolve(__dirname, 'src/components/forms/loop-request-form'),
    // scheduledTaskForm: resolve(__dirname, 'src/components/forms/scheduled-task-form'),
    // taskContainer: resolve(__dirname, 'src/components/tasks/tasks-container'),
    // robotContainer: resolve(__dirname, 'src/components/robots/robot-cards-container')
  },
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    chunkFilename: "static/dist/[name].chunk.js",
    publicPath: "/public",
  },
  plugins: [
    new webpack.ids.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css", ".tsx", ".ts"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: [/node_modules/, /\.(json)?/],
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
        type: "javascript/auto",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};

module.exports = config;
