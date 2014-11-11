var Path = require('path');

module.exports = function (config){
    config.scripts = { types: [
        'main', 'provider', 'filter', 'service', 'controller', 'directive'
    ]};

    config.vendors = config.vendors || {};
    config.vendors.prefix = config.vendors.prefix || [];
    config.vendors.prefix.push(Path.resolve(__dirname, '../node_modules'));

    config.vendors.js = (config.vendors.js || []).concat([
        'ionic/release/js/ionic.bundle.js'
    ]);

    config.vendors.css = (config.vendors.css || []).concat ([
        'ionic/release/css/ionic.css'
    ]);

    config.static['/fonts'] = Path.resolve(
        __dirname, "../node_modules/ionic/release/fonts"
    );

    return config;
};
