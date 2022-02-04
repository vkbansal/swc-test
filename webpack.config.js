module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "swc-loader",
          },
        ],
      },
    ],
  },
};
