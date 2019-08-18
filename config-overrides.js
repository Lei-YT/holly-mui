module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.devtool = false;
    return config;
}