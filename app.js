const http = require('http');
const fs = require ('fs');

http.createServer((req, res) => {
    let body = [];
        req.on('error', (error) => {
            console.error(error.stack);
            res.writeHead(400, 'Error while receiving request data');
            res.end();
        }).on('data', (chunk) => {
            body.push(chunk)
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            if (req.method == "GET") {
                if (req.url == '/' || req.url == '/index.html') {
                    res.writeHead(301, { "Location": "http://" + req.headers['host'] + '/home.html' });
                    return res.end();
                }
                var path = "./Pages" + req.url;
                if (path.endsWith('/')) path = path.substring(0, path.length - 1);
                fs.readFile(path, (err, data) => {
                    if (err) {
                        console.error(err);
                        fs.readFile('./Pages/error404.html', (err, data) => {
                            if (err) {
                                console.error(err);
                                res.end();
                            } else {
                                res.writeHead(404, 'Page Not Found');
                                res.write(data);
                                res.end();
                            }
                        });
                    } else {
                        res.setHeader('Content-Type', 'text/html');
                        res.writeHead(200);
                        res.write(data);
                        res.end();
                    }
                });
            }
        });
        
}).listen(9898);