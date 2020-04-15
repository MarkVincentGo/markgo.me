/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();

server.prepare()
  .then(() => {
    const app = express();
    app.use(express.json());
    
    app.get('/.well-known/acme-challenge/JqQLkBcjNhU6smd-x-r_tG1o4kOfEUe-Ger6IkMA7Eg', (req, res) => {
      res.send('JqQLkBcjNhU6smd-x-r_tG1o4kOfEUe-Ger6IkMA7Eg.XSANxVJErCD31XyJ1pGr-dhc08KOZ0vZdD69XBORJJA');
    });

    app.get('*', (req, res) => {
      return handle(req, res);
    });
    app.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });


// app.listen(port, console.log(`App is listening on port 3000`))
