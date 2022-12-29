const express = require('express')
const expresslayout = require('express-ejs-layouts')
const path = require('path')
const homeRoutes = require('./routes/home-routes')

const app = express()

app.use(expresslayout)
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(homeRoutes.routes)

app.listen(3000, ()=> console.log('server is listing to port 3000'))