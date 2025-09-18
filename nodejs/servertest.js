const http = require('http');

const server = http.createServer((req, res) => {
  
  if (req.url === '/'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('nothing\n');
  }else if (req.url === '/hello'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello\n');
  }else if (req.url === '/page'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
     res.end(`
      <!DOCTYPE html>
      <html>
      <h1> hello <h1/>
      </html>
    `);
  }}
);

const PORT = 3000;
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

