/**
 * 将模块定义为类
 * 你也可以在模块文件内将exports对象书写为“module.exports”，但是在需要将模块定义为一个类时，只能使用“module.exports”的书写方法。
 */

var _name, _age;//私有变量
var name = '', age = 0;//公有变量

//模块对象的构造函数
var foo = function (name, age) {
    _name = name;
    _age = age;
}

//获取私有变量_name变量值
foo.prototype.GetName = function () {
    return _name
}
//设置私有变量_name变量值
foo.prototype.SetName = function (name) {
    _name = name
}

foo.prototype.GetAge = function () {
    return _age
}
foo.prototype.SetAge = function (age) {
    _age = age
}


foo.prototype._name = name;
foo.prototype._age = age;

module.exports = foo;