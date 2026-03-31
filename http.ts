/**
 * News Server - Main HTTP server.
 * Serves static files and routes API requests.
 * @author wsscat
 */

import * as http from 'http';
import * as fs from 'fs';
import * as url from 'url';
import * as path from 'path';
import * as querystring from 'querystring';
import { types as mimeTypes } from './mime';
import { newsApi } from './newsApi';
import { turingApi } from './turingApi';

// Re-export API modules
export { newsApi, turingApi };

// Import CMS router
const newsCms = require('./webroot/cms/cms.js');

const PORT = 12345;

/** Create the HTTP server. */
http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
  let pathname = url.parse(request.url || '').pathname || '/';
  const paramStr = url.parse(request.url || '').query || '';
  const param = querystring.parse(paramStr) as Record<string, string>;

  // Default to index.html for directory paths
  if (pathname.endsWith('/')) {
    pathname += 'index.html';
  }

  const absPath = path.join(__dirname, 'webroot', pathname);

  fs.exists(absPath, (exists: boolean) => {
    if (exists) {
      // Serve static file
      fs.readFile(absPath, 'binary', (err: NodeJS.ErrnoException | null, data: string) => {
        if (err) {
          console.error(err);
          response.writeHead(404, { 'Content-Type': 'text/html' });
          response.end('404 Not Found');
          return;
        }

        const ext = path.extname(pathname).slice(1);
        const contentType = mimeTypes[ext] || 'application/octet-stream';
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(data, 'binary');
      });
    } else {
      // Route API requests
      switch (pathname) {
        case '/newsApi':
          newsApi(param as any, () => {}, response);
          break;
        case '/turingApi':
          turingApi(param as any, () => {}, response);
          break;
      }
      // CMS CRUD routes
      newsCms.curd(request, response);
    }
  });
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}/news/index.html`);