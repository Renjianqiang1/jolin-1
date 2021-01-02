var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')
var zoon = require('./server.js')

var fs = require('fs')

var bodyParser = require('body-parser')
const { send } = require('process')

var app = express()
app.use(cors())





// var hh=''


// zoon.find((err,ret)=>{
//   if(err){
//      console.log(err)
//   }else{
//     hh=ret
//     console.log(ret)
//   }
// })
// x2.remove(1,2)                                         
// x2.findByIdAndupdata(1,2)
// new zoon({name:'大雕',image:'',video:''}).save((err,ret)=>{
//   if(err){
//     console.log(err)
//  }else{
//    hh=ret
//    console.log(ret)
//  }

// })



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// var pp = [{'oo':'ii'},{'uu':'ii'},{'pp':'uu'}]
// console.log('pp是'+typeof(pp))
// pp.unshift({'ff':'ss'})
// console.log(pp)


// fs.readFile('./view/mess.json', (err, data) => {
//   if (err) {
//     // res.setHeader('Content-type', 'text/plain;charset=utf-8')
//     res.send('亲，再试试')
//     // console.log(err)
//   } else {
//     data = JSON.parse(data)
//     console.log(data)
//     data.push({'kk':'hh'})
//     console.log(typeof( data))
//     console.log(data)
//   }
//   })

//      get home massage
app.get('/home', function (req, res) {
  fs.readFile('./home.txt', (err, data) => {
    if (err) {
      res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send('亲，再试试')
      // console.log(err)
    } else {
      //  res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send(data)
      // console.log(data.toString())

    }
  })
})


app.get('/ocean', function (req, res) {
  fs.readFile('./view/ocean.json', (err, data) => {
    if (err) {
      // res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send('亲，再试试')
      // console.log(err)
    } else {
      //  res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send(data)
      // console.log(data.toString())
     }
  })
})



app.get('/sky', function (req, res) {
  fs.readFile('./view/sky.json', (err, data) => {
    if (err) {
      // res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send('亲，再试试')
      // console.log(err)
    } else {
      //  res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send(data)
      // console.log(data.toString())
     }
  })
})


app.get('/land', function (req, res) {
  fs.readFile('./view/land.json', (err, data) => {
    if (err) {
      // res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send('亲，再试试')
      // console.log(err)
    } else {
      //  res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send(data)
      // console.log(data.toString())
     }
  })
})


app.get('/echa', function (req, res) {
  fs.readFile('./view/ecah.json', (err, data) => {
    if (err) {
      // res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send(err)
      // console.log(err)
    } else {
      //  res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send(data)
      // console.log(data.toString())
     }
  })
})



app.get('/mess', function (req, res) {
  fs.readFile('./view/mess.json', (err, data) => {
    if (err) {
      // res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send('亲，再试试')
      // console.log(err)
    } else {
      //  res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send(data)
      // console.log(data.toString())
     }
  })
})

app.post('/mess', function (req, res) {
  var pl=req.body
  // console.log(req.body)
  // console.log(typeof(req.body))
  fs.readFile('./view/mess.json', (err, data) => {
    if (err) {
      // res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.send('亲，再试试')
      // console.log(err)
    } else {
      data = JSON.parse(data)
      // console.log(data)
      // data.push({'kk':'hh'})
      // console.log(typeof( data))
      // console.log( data)


      data.unshift(pl)
      // //  res.setHeader('Content-type', 'text/plain;charset=utf-8')
      // // console.log(data.toString())
      fs.writeFile('./view/mess.json',JSON.stringify(data),function(err,data){
        if(err){
          console.log('未写入成功')
        }else{
          console.log('成功')
        }
      })
     }
  })
})



app.listen(3000, function () {
  console.log('服务器已开')
}
)
