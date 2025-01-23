const express = require('express');
const app = express();
const port = 8082;

app.get('/', (req, res) => {
    res.send('hello from node.js service');
});

app.listen(port, () => {
    console.log(`Node.js service listening at http://localhost:${port}`);
});