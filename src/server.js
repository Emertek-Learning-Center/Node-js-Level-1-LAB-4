const http = require('http')
const port = 5000



const server = http.createServer((req, res) =>{
    res.write('Hello Clarice 😬')
    res.end()
})



server.listen(port, err =>{
    if (err) {
        console.log("Error starting the server");
    } else{
        console.log(`Server is live on port ${port}`);
    }
})