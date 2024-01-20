// const os = require('os');

// const user = os.userInfo();
// console.log(user);

// const currentOs = {
//    name:os.type(),
//    release:os.release(),
//    totalMem:os.totalmem(),
//    freeMem:os.freemem()
// }

// console.log(currentOs);

// const EventEmitter = require('events');

// const event = new EventEmitter();

// event.on("sayMyName", () => {
//    console.log("My name is Sample");
// })

// event.on("sayMyName", () => {
//    console.log("My name is temporary");
// })

// event.on("sayMyName", () => {
//    console.log("My name is Yash");
// })

// event.emit("sayMyName");

// event.on('checkPage', (sc , msg) =>{
//    console.log(`The status code is ${sc} and the page is ${msg}`);
// })

// event.emit("checkPage", 200, 'ok');

// const fs = require('fs');
// const http = require('http');
// const { stream } = require('undici-types');

// const server = http.createServer();
// server.on('request', (req,res) =>{
   //this is not straming data this is 1st method
   // fs.readFile("input.txt", (err,data) =>{
   //    if(err) return console.error(err);
   //    res.end(data.toString());
   // })
   
   //2Nd Method
   // this is stream method oer 2ns method
   // reading from stream
   // create readable stream
   // handle stream events - data end and error



   // const rStream = fs.createReadStream("input.txt");
   // rStream.on('data', (chunkData) =>{                //this data is called when we have data to read
   //    res.write(chunkData);
   // })    
   
   // rStream.on('end', () =>{                //this end is called when there is no data to read
   //    res.end();
   // })  
   // rStream.on('error', (err) =>{
   //    console.log(err);
      
   //    res.end("file not found");
   // })

// });

// server.listen(8000,'127.0.0.1');



