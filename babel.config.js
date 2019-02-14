module.exports = function (api) {
    api.cache(true);
  
    const presets = [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage"
            }
        ]
    ];
    const plugins = [
        "transform-custom-element-classes"
      ];
  
    return {
      presets,
      plugins
    };
  }