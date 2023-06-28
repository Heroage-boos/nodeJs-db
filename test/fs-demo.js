var fs = require('fs')

//异步读文件
fs.readFile("./fs-text.text", "utf-8", (err, data) => {
    console.log('data', data)
})
//异步读文件
fs.readFile("./fs-text.text", "utf-8", (err, data) => {
    console.log('data2', data)
})

// //同步读取文件
// fs.readFileSync("./fs-text.text","utf-8",(err,data)=>{
//     console.log("fileSync",data);
// })

//异步写入文件
fs.writeFile("./fs-write.text", "三人行 必有我室友2", "utf-8", (err, data) => {
    console.log("wirete", data)
})

//使用writeFile方法复制图片文件
fs.readFile("./fsFile/微信图片_20230307083948.jpg", "base64", (err, data) => {
    fs.writeFile("./fsFile/b.jpg", 'base64', (err, data) => {
        if (err) {
            console.log("写入文件失败!", err)
        } else {
            console.log("写入文件成功！")
        }
    })
})

//异步追加写入数据
fs.appendFile("./fs-write.text", '\r这是追加写入的数据', 'utf-8', (err, data) => {
    console.log('异步追加写入数据', data)
})

//同步写入文件
fs.writeFileSync("./fs-write.text", "三人行 必有我室友3", "utf-8", (err, data) => {
    console.log("wireteSync", data)
})

//文件流读取文件
var file = fs.createReadStream('./fs-text.text', { start: 0, end: 100 });
file.on('open', function (fd) {
    console.log('开始读取文件。');
});
file.on('data', function (data) {
    console.log('读取到数据：');
    console.log(data, data.toString());
});
file.on('end', function () {
    console.log('文件已全部读取完毕。');
});
file.on('close', function () {
    console.log('文件被关闭。');
});
file.on('error', function (err) {
    console.log('读取文件失败。');
});


//　使用createWriteStream方法写入文件