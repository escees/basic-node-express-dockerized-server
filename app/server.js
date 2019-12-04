const express = import('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello Kamil!')
});

app.listen(4000);
