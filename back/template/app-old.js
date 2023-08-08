const http = require('http')

http.createServer((req, res) => {
    res.write(`Hello Andie it is `+req.url)
    res.end()
}).listen(8080)

console.log('Listening on port 8080')