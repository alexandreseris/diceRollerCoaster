module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    contentBase: require("path").join(__dirname, "src", "fixtures")
  }
};
