const express = require('express');
require('express-async-errors');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);
app.use((error, request, response, next) => {
  response.sendStatus(500);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
