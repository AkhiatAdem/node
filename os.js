
const fullname = require('./moduls.js');
const sayname = require('./function.js');
sayname(fullname.adem,fullname.akhiat,fullname.abd);


const os  = require('os');
// info abt current user
const user = os.userInfo();
const time = os.uptime();
console.log(user);
console.log(time);
const currentos = {
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    free:os.freemem()
}
console.log(currentos);


//////
const read = require('fs');
const write = require('fs');
const name = require('./moduls.js');
const first = read.readFileSync("./content/first.txt",'utf8');
const second = read.readFileSync("./content/second.txt",'utf8');
const third = read.writeFileSync("./content/third.txt",`hello${name.adem}`,{flag: 'a'});
console.log(first,second);





///async
const readfile = require('fs');
const writefile = require('fs');
readfile.readFile('./content/first.txt','utf8',(err,result)=>{
 if(err){
    console.log(err);
    return 0;
 }
 const one = result;
 readfile.readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return 0;
    }
    const two = result;
    readfile.writeFile('./content/fourth.txt',`${one} ${two}`,(err,result)=>{
        if(err){
            console.log(err);
            return 0;
        }
    })
 })
})



