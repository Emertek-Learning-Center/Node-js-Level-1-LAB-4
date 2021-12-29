const http = require('http')
const port = 5000
const fs = require('fs')


const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type': 'text/html'})
    fs.readFile('index.html', (err, data) =>{
        if (err) {
            res.writeHead(404)
            res.write('something went wrong')
        } else{
            res.write(data)
        }
        res.end()
    })
})



server.listen(port, err =>{
    if (err) {
        console.log("Error starting the server");
    } else{
        console.log(`Server is live on port ${port}`);
    }
})