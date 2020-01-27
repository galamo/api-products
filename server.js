var app = require("./app");
console.log("app loaded");
var http = require("http");


var port = 3500;
app.set('port', port);
app.use(errorHandler);
var myServer = http.createServer(app);
myServer.listen(port);
console.log("listening to port")


function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
}