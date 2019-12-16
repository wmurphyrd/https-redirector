// https://stackoverflow.com/a/7458587
const http = require('http')
const express = require('express')

const app = express()

// set up a route to redirect http to https
app.get('*', function(req, res) { 
    res.redirect('https://' + req.headers.host + req.url)
})

http.createServer(app).listen(80)
console.log('https-redirector started')
