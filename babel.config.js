
module.exports = function (api) {
    api.cache(true);
  
    const presets = [ [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
        "corejs":3
      }
  ] ,"@babel/preset-react"];
    // const plugins = [ ... ];
    // const plugins = ["syntax-dynamic-import","my-plugin"]
    const plugins = ["@babel/plugin-transform-runtime","syntax-dynamic-import","@babel/plugin-proposal-class-properties"]
  
    return {
      presets,
    //   plugins
      plugins
    };
  }