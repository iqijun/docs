
const pluginConf = require('./configs/plugins.js');
const nav = require("./nav.js");


module.exports = {
    title:"余闲笔记",
    plugins: pluginConf,
    base: '',
    // nav: nav,
    themeConfig:{
        nav: nav,
        lastUpdated: "最近更新",
        logo: 'avatar.jpg'
    }

}