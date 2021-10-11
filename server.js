const http = require('http');
const fs = require('fs');
const url = require('url-parse');

http.createServer((req, res) => {
    let path = new url(req.url)
    if (path == "" || path == "/") {
        path = '/index.html'
    }
    let fileName = "." + path;
    

    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, { 'content-Type': 'text/html;charset=UTF-8' })
            res.end('<H1>Page not found</H1>')
        } else {
            res.writeHead(200, { 'content-Type': 'text/html; charset=UTF-8' })
            res.write(data)
            res.end()
        }
    })

}).listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Server running on port 3000!!!!')
        
    }
});