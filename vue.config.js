var path = require("path");
var pxtovv = require("postcss-px-to-viewport");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("src", path.resolve("src"));
  },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          new pxtovv({
            viewportWidth: 375,
            selectorBlackList: [".van", ".novv"], // 过滤掉.norem-开头的class，不进行rem转换
            // unitToConvert: "px",
            // unitPrecision: 5,
            // propList: ["*"],
            // viewportUnit: "vw",
            // fontViewportUnit: "vw",
            // selectorBlackList: [],
            // minPixelValue: 1,
            // mediaQuery: false,
            // replace: true,
            // exclude: [],
          }),
        ],
      },
    },
  },
};
