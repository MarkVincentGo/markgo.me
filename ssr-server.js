/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const next = require('next');
const morgan = require('morgan');
const path = require('path');

const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();

server.prepare()
  .then(() => {
    const app = express();
    app.use(morgan('dev'));
    app.use(express.json());

    app.get('*', (req, res) => {
      return handle(req, res);
    });

    //app.use(express.static(path.join(__dirname, 'public')));
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
