var express = require('express')
var app = express()
var fs = require('fs')

// mine
// app.get('/books', function(req, res){
//   fs.readFile(process.argv[3], function(err, data){
//     if (err) throw err;
//     object = JSON.parse(data);
//     res.json(object)
//   })
// })

// official
app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data){
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})
//

app.listen(process.argv[2])
