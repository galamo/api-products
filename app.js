var express = require("express");

var product = require("./routes/product");

var cart = require("./routes/cart");
var bodyParser = require('body-parser')

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use("/products", product);
app.use("/cart", cart);

console.log("app loaded in appjs");


module.exports = app;


























































// var http = require("http");
// var fs = require("fs");
// var jsonfile = require("jsonfile");
// var i = 0;
// console.log("22222222");


// var file = 'data.json'
// var obj = {name: 'nir saado'}

// jsonfile.writeFileSync(file, obj)

// var files = fs.readdirSync("./");
// var logFlag = false;
// for (var i = 0 ; i < files.length; i++){
//     console.log(files[i]);
//     if(files[i] == "Logs.txt") {
//         logFlag = true;
//     }
// }
// console.log("2");
// if(logFlag) writeToLog();

// // function myFunc(){
// //     return "some text to log file \r\n"
// // }
// function writeToLog(){
//     i++;
//     fs.appendFileSync("Logs.txt","gfs" ,[,"w+"],function(err){
//         console.log("4");
//         if(err){
//             return console.log(err);
//             }
//     } )
// }

// console.log("3");
// readFromFile();
// function readFromFile(){
//     fs.readFileSync("Logs.txt","utf8",function(err,data){
//         //console.log(data);
//         var lines = data.split("\r\n");
//         return lines;
//         // for (var i = 0 ; i < lines.length; i++) {
//         //     console.log("line "+ i +": " + lines[i]);
//         // }

//     })
// }




// var MyServer = http.createServer(function(req,res){

//     // writing to log file the request
//     //reading from log File response
//     // sending response from log file

//     //  var stat = fs.statSync("./Logs.txt");
//     // var file1 = fs.readFileSync("Logs.txt", 'binary');
//     //
//     // res.setHeader('Content-Length', stat.size);
//     // res.setHeader('Content-Type', 'text/html');
//     // res.setHeader('Content-Disposition', 'attachment; filename=Logs.txt');
//     // res.write(file1, 'binary');
//     // res.end();

//     // fs.appendFileSync("Logs.txt","user "+i+" logged in \r\n");
//     // var content = fs.readFileSync("Logs.txt");
//     res.write("hello server11232423232");
//     res.end();

// });


// console.log("Server Creation : step 3");
// MyServer.listen(3000);

































// var http = require('http');
//
// http.createServer(function (request, response) {
//
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//
//
//
//     response.end('Hello World\n');
//
// }).listen(8081);
//
//
//
// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');


// var happy = function(){
//     console.log('happy passover');
// }
// happy();
//
//
// setTimeout(happy,5000);
//
//
// function order(orderNumber) {
//
//     console.log("Customer Order is:" , orderNumber);
//
//     // cookAndServer(function(){
//     //     console.log("food order ready and deliverd" , orderNumber);
//     // })
//
//     cookAndServer2(2);
//
// }
// function cookAndServer2(o){
//     console.log("food order ready and deliverd" , o);
// }
//
// function cookAndServer(callback){
//     setTimeout(callback,5000);
// }
//
// order(1);
// order(2);
// order(3);
// order(4);
// order(5);