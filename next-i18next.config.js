const path = require("path");
module.exports = {
  i18n: {
    locales: ["en", "mn"],
    defaultLocale: "mn",
    localeDetection: false,
  },
  localePath: path.resolve("./public/locales"),
};
