const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PAGE = path.join(__dirname, 'aurora-crm.html');

const server = http.createServer((req, res) => {
  fs.readFile(PAGE, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('No se pudo cargar aurora-crm.html');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Aurora CRM sirviendo en el puerto ${PORT}`);
});
