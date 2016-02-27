'use strict';

var express = require('express')
var exphbs = require('express-handlebars')
var fs = require('fs')
var path = require('path')



var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});


// GET
//setup the route for the peanutButter
app.get('/peanutButter', function (req, res) {
  var fullPath = (__dirname + '/../db/db.json')   //fs needs a full path
  console.log(fullPath)
  fs.readFile(fullPath, 'utf8', function(err, data) {
    if (err) {
      console.log(err, 'err')
    }
    else {
      var fileJson = JSON.parse(data)
      console.log(fileJson)
      //res.json(fileJson.peanutButter)
      res.render('peanutButter', fileJson)
    }
  })

})




module.exports = app
