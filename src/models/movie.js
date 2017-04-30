//根据模式创建数据库模型
var mongoose = require('mongoose')
var MovieSchema = require('../schemas/movie')

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie