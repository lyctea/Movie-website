// 服务器端入口文件
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongooes = require('mongoose')
var Movie = require('./models/movie')     //数据库模型,提供接口,用以访问数据库,进行增删改查等
var _ = require('underscore')  //一个空白的 HTML 页面，并希望立即开始工作

var port = process.env.PORT || 3000;
var app = express();

mongooes.Promise = global.Promise;
mongooes.connect('mongodb://localhost:27017/movie'); //数据库连接

app.set('views','./views'); //模板路径
app.set('view engine','jade');  //指定模板引擎

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(path.join(__dirname,''))); //静态文件指定目录,又重定向作用
app.locals.moment = require('moment');  //moment 模块用于格式化时间

app.listen(port);  //监听端口

console.log('test start port=' + port);

//首页
app.get('/',function (req,res) {
    Movie.fetch(function (err,movies) {
        if (err){
            console.log("获取数据错误: " + err);
        }
        res.render('index',{
            title: '测试首页',
            movies: movies
        })
    })
})

//404页面
app.get('/error',function (req,res) {
    res.render('error',{
        errMess: "页面被外星人劫持了!"
    })
})

