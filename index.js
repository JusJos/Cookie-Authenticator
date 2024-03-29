const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { signinHandler, welcomeHandler, refreshHandler, logoutHandler } = require('./handlers')
const http = require('http')
const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.post('/signin', signinHandler)
app.get('/welcome', welcomeHandler)
app.post('/refresh', refreshHandler)
app.get('/logout', logoutHandler)
const server = http.createServer(app)
server.listen(8080,()=>{
    console.log("Good To go JARZ");
}
)
