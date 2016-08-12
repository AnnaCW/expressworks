var express = require('express')
var app = express()

app.get('/search', function(req, res){
  var term = req.query
  res.send(term)
})

app.listen(process.argv[2])
