
var mongoose = require('mongoose')


 mongoose.connect('mongodb://localhost/zoon',
 { useUnifiedTopology: true },
 function(err){
   if(err){
       console.log(err)
    }else{
        console.log('数据库链接成功')
    }

 })

var Schema = mongoose.Schema
var niaoobj = new Schema({
    name:String,
    image:String,
    video:String
  
})






module.exports = mongoose.model('Niao',niaoobj) 