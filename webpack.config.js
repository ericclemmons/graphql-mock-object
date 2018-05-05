const StartServerPlugin = require("start-server-webpack-plugin")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")

// webpack
module.exports = {
  // --entry 'webpack/hot/poll?100'
  // --entry './server/index.js'
  entry: {
    server: ["webpack/hot/poll?100", "./server"],
  },
  externals: [
    nodeExternals({
      whitelist: ["webpack/hot/poll?100"],
    }),
  ],
  // --mode development
  mode: process.env.NODE_ENV,
  plugins: [
    // --hot
    new webpack.HotModuleReplacementPlugin(),
    // --plugin start-server-webpack-plugin
    new StartServerPlugin(),
  ],
  stats: "errors-only",
  // --target node
  target: "node",
}
