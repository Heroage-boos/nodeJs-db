// 引入http模块
let http = require("http")

//从模块外部访问变量，函数或对象
let foo = require("./tests/test1")

let server = http.createServer(function (e) {
    console.log('e', e)
})


server.listen(8001, (req) => {
    console.log('foo', foo.msg, foo.funcname());
    console.log("服务器开启成功!", server.address(), __filename, __dirname)
})