var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')

// create a new instance of an express app
var app = express()


// set up EJS
app.set('view engine', 'ejs')   //behind the scenes, requires ejs
// allows us to put css and images and stuff inside views folder
app.use(express.static('views'))
// tell app where to find views folder
app.set('views', __dirname + '/views')

app.get('/', function(request, response){
    response.render('home.ejs')
})

app.get('/our-story', function(request, response){
    response.render('our-story.ejs')
})

app.get('/women', function(request, response){
    response.render('women.ejs')
})


app.get('/men', function(request, response){
    response.render('men.ejs')
})

app.get('/contact-us', function(request, response){
    response.render('contact-us.ejs')
})

app.get('/private-policy', function(request, response){
    response.render('private-policy.ejs')
})

app.get('/terms-&-conditions', function(request, response){
    response.render('terms-&-conditions.ejs')
})

app.get('/size-chart', function(request, response){
    response.render('size.ejs')
})

app.get('/order-status', function(request, response){
    response.render('order-status.ejs')
})

app.get('/shipping', function(request, response){
    response.render('shipping.ejs')
})

app.get('/frequently-asked-questions', function(request, response){
    response.render('frequently-asked-questions.ejs')
})

app.get('/shoppingCart', function(request, response){
    response.render('shoppingCart.ejs')
})

app.get('/shoppingCart', function(request, response){
    response.render('shoppingCart.ejs')
})

var port = process.env.PORT

app.listen(port, function(){
    console.log(`App running on ${port} hamsters.`)
})

