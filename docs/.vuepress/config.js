
const pluginConf = require('./config/plugins.js');
const nav = require("./nav.js");


module.exports = {
    title:"余闲笔记",
    plugins: pluginConf,
    // nav: nav,
    themeConfig:{
        nav: nav,
    }

}