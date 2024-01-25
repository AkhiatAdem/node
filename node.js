const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url == '/'){
    res.write(`<h1>home page:</h1>
    <p>suiiiii</p>
    <a href="/about">about</a>`);
    res.end();
}else if(req.url == '/about'){
    res.write(`<h1>ABOUT:<h1>
    <p>i am adem</p>
    <a href="/">home</a>`);
    res.end();
}else{
   res.write(`
   <h1>Oops</h1>
   <p>we didnt find the page</p>
   <a href='/'>back</a>
   <a href='/about'>about</a>

   `)
   res.end();
}

})
server.listen(5173);