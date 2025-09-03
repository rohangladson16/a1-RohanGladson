const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html', 'text/html' )
      break
    case '/index.html':
      sendFile( response, 'index.html', 'text/html' )
      break
    case '/custom-style.css':
      sendFile(response, 'custom-style.css', 'text/css')
      break
    case '/simple-animation.js':
      sendFile(response, 'simple-animation.js', 'text/javascript')
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename, contentType ) {
   fs.readFile( filename, function( err, content ) {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/plain' })
      response.end('Server Error')
    } else {
      response.writeHead(200, { 'Content-Type': contentType })
      response.end(content, 'utf-8')
    }
   })
}