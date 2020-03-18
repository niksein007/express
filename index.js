const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const route = require('./router/route')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/',route)

app.engine('.hbs', hbs({
    defaultLayout:'layout',
    extname:'.hbs'
}))

app.set('view engine', 'hbs')





app.listen(3000,()=>{
    console.log('skywalker is listening');
    
})