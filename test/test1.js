/**
 * 使用exports对象
 */
var myMsg = 'hello'

var fn1 = function () {
    return 'my is fn1';
}

exports.msg = myMsg;
exports.funcname = fn1;