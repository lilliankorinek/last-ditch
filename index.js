// import express & other dependencies
let express = require('express');
let app = express();

// ProgressBar dependency
// var ProgressBar = require('progressbar.js')
// var line = new ProgressBar.Line('#container');


// mustache like express is a dependency that you have to pull into your project
let mustache = require('mustache-express');

// block header from containing information about server for security
app.disable('x-powered-by')


// html --> telling express app that all html files should be handled by mustache templating engine, mustache declared in previous line
app.engine('html', mustache());
app.set('view engine', 'mustache');

// refers to project folder
app.set('views', __dirname +'/views');
app.use('/assets', express.static('assets'));

let hello_data = {

  name: "Mimi"

};

app.get('/', function (req, res) {
  res.render("index.html", hello_data);
})

app.get('/activate', function (req, res)
{
    res.render('activate.html');
});

app.get('/confirmation', function (req, res)
{
    res.render('confirmation.html');
});

app.get('/contacts', function (req, res)
{
    res.render('contacts.html');
});

app.get('/panic', function (req, res)
{
    res.render('panic.html');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
