const fs = require('node:fs');
const plugins = {};

try {
    let pluginsDir = fs.readdirSync(__dirname + '/plugins');
    pluginsDir.forEach((name) => {
        try {
            let plugin = require(`./plugins/${name}/index`);
            plugins[plugin.name] = plugin.modules;
        } catch (err) {
            console.error(err);
        }
    });
} catch (err) {
    if (err.code !== 'ENOENT') { console.error(err); }
}

module.exports = plugins;
