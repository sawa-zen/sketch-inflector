module.exports = config => {
  config.resolve.extensions = [".js", ".jsx"];

  config.module.rules.push({
    test: /\.js?$/,
    loader: "babel-loader",
    options: {
      compact: false,
      cacheDirectory: true
    },
    exclude: /node_modules/
  });

  return config;
};
