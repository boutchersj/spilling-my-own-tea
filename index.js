const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/episodes', (req, res) => {
    res.send(['Episode 1', 'Episode 2', 'Episode 3', 'Episode 4', 'Episode 5', 'Episode 6'])
})

app.get('/episodes/:id', (req, res) => {
    res.send(req.params.id);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}`));