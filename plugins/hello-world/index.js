function HelloWorldPlugin(options) {
    this.config = options;
    // 使用 options 设置插件实例……
}

HelloWorldPlugin.prototype.apply = function(compiler) {
    const that = this;
    compiler.plugin('done', function(compilation, callback) {
        console.log('Hello World!', that.config);
        console.log('Hello compilation!', compilation);
        callback && callback()
    });
};
  
module.exports = HelloWorldPlugin;
