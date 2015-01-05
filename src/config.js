var Path = require('path');

module.exports = function (config){
    config.append('stassets.scripts.types', [
        'main', 'provider', 'filter', 'service', 'controller', 'directive'
    ]);

    config.append(
        'stassets.vendors.prefix',
        Path.resolve(__dirname, '../node_modules')
    );

    config.prepend('stassets.vendors.js', 'ionic/release/js/ionic.bundle.js');
    config.prepend('stassets.vendors.css', 'ionic/release/css/ionic.css');
    config.find('static./fonts', Path.resolve(
      __dirname, "../node_modules/ionic/release/fonts"
    ));

    return config;
};
