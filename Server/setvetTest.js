var http = require('http');
var fs = require('fs');

var server = http.createServer(
    function(req, res){
        var file = "./" + req.url;
        // read file
        fs.readFile(file, function(err, data){
            // error
            if (err){
                console.log(err);
                res.writeHeader(404, {'content-type': 'text/html;charset="utf-8"'});
                res.write("<h1>Oops!</h1>");
                res.end();
            } else {
                res.writeHeader(200, {'content-type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    }
).listen(8888);
console.log("OK");