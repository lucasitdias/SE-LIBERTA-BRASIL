/**
 * Se Liberta Brasil - Simple HTTP Server
 * Serves the static website and provides basic API endpoints
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, '../public');

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// Create HTTP server
const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    // Parse URL
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(PUBLIC_DIR, filePath);

    // Get file extension
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Read and serve file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Página não encontrada</h1>', 'utf-8');
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Erro no servidor: ${err.code}`, 'utf-8');
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Start server
server.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log('🇧🇷  Se Liberta Brasil - Servidor Iniciado');
    console.log('='.repeat(50));
    console.log(`📍 Servidor rodando em: http://localhost:${PORT}`);
    console.log(`📁 Diretório público: ${PUBLIC_DIR}`);
    console.log(`⏰ Iniciado em: ${new Date().toISOString()}`);
    console.log('='.repeat(50));
    console.log('\n✨ Pronto para receber requisições!\n');
});

// Handle server errors
server.on('error', (err) => {
    console.error('❌ Erro no servidor:', err);
    process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\n🛑 Encerrando servidor...');
    server.close(() => {
        console.log('✅ Servidor encerrado com sucesso');
        process.exit(0);
    });
});

module.exports = server;
