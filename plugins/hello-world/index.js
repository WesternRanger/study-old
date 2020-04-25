function HelloWorldPlugin(options) {
    this.config = options;
    // 使用 options 设置插件实例……
}

HelloWorldPlugin.prototype.apply = function (compiler) {
    compiler.plugin("compilation", function (compilation) {
        compilation.plugin("optimize", function (e) {
            console.log("Assets are being optimized.", compilation);
        });
    });
};
  
module.exports = HelloWorldPlugin;
