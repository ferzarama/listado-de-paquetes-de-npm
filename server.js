const http = require('http');
const PORT = 8000; 

const packages = [
  { nombre: 'express', descripcion: 'Framework web rápido y minimalista para Node.js' },
  { nombre: 'koa', descripcion: 'Siguiente generación de framework web para Node.js' },
  { nombre: 'hapi', descripcion: 'Framework rico en características para aplicaciones y servicios' },
  { nombre: 'fastify', descripcion: 'Framework web rápido y eficiente para Node.js' }
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Paquetes de npm para Servidores</h1>');
  res.write('<ul>');
  packages.forEach(pkg => {
    res.write(`<li><strong>${pkg.nombre}</strong>: ${pkg.descripcion}</li>`);
  });
  res.write('</ul>');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
