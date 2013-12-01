var     sys = require("sys"),
       http = require("http"),
        url = require("url"),
         fs = require("fs"),
querystring = require("querystring");
 
http.createServer(function (request, response) {
  switch (url.parse(request.url).pathname) {
    case '/':
      show_main(request, response);
      break;
    case '/main.js':
      show_js(request, response);
      break;
    case '/main.css':
      show_css(request, response);
      break;
    default:
      show_404(request, response);
      break;
  }
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');

function show_main(request, response) {
  sys.puts("Serving main page");
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile("main.html", function(err, text){
    response.end(text);
  });
}

function show_js(request, response) {
  sys.puts("Serving main page");
  response.writeHead(200, {'Content-Type': 'text/javascript'});
  fs.readFile("main.js", function(err, text){
    response.end(text);
  });
}

function show_css(request, response) {
  sys.puts("Serving main page");
  response.writeHead(200, {'Content-Type': 'Stylesheet'});
  fs.readFile("main.css", function(err, text){
    response.end(text);
  });
}

function show_404(request, response) {
  sys.puts("Serving 404 error page");
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('404 - Please try again.');
  response.end();
}