const webpack = require("webpack");
const path = require("path");
const withFonts = require("next-fonts");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
};
const nextConfig = {
  exportPathMap: function () {
    return {
      "/": { page: "/" }
    };
  },
  webpack: config => {
    config.resolve.modules = [path.resolve("./node_modules"), path.resolve("src")];
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    return config;
  },
  i18n
};

module.exports = withFonts(withBundleAnalyzer(nextConfig));
