const express = require('express');

const router = require('./routes');

const app = express();

app.use(router);

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
