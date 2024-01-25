const http = require("http");
const server = http.createServer((req,res)=>{
    console.log("server requested");
    res.write("server requested")
    res.end();
})
server.listen(5173,()=>{
    console.log('server is listenning to port 5173');
})