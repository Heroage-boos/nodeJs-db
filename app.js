// 引入http模块
let http = require("http")

//从模块外部访问变量，函数或对象
let foo = require("./test/test1")
let foo2 = require("./test/test2")
// 新建模块对象
let myFoo = new foo2("Tom", 40);

let server = http.createServer(function (e) {
    console.log('e', e)
})


server.listen(8001, (req) => {
    console.log('foo', foo.msg, foo.funcname());

    //获取修改前的私有变量值
    console.log("获取修改前的私有变量值", myFoo.GetAge(), myFoo.GetName())
    //修改私有变量值
    myFoo.SetName("Bob")
    myFoo.SetAge(10)
    //获取修改后的私有变量值
    console.log("获取修改后的私有变量值", myFoo.GetAge(), myFoo.GetName())

    //获取修改前的公有变量值
    console.log('获取修改前的公有变量值', myFoo.name, myFoo.age)
    //修改公有变量值
    myFoo.name = '嚣张'; myFoo.age = 100;
    //获取修改后的公有变量值
    console.log('获取修改后的公有变量值', myFoo.name, myFoo.age);
    console.log('获取modle文件路径', foo2.__filename);

    console.log("服务器开启成功!", server.address(), __filename, __dirname)
})