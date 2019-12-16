// https://stackoverflow.com/a/7458587
// set up plain http server
var http = express.createServer()

// set up a route to redirect http to https
http.get('*', function(req, res) {  
    res.redirect('https://' + req.headers.host + req.url)
})

http.listen(80);
console.log('https-redirector started')
