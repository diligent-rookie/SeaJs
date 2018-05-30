//引入入口js函数
define(function (require,exports,module) {
    var a = require('./test.js');
    module.exports=a.test;
})