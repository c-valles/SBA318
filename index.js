const express = require('express');
const app = express();
const PORT = 4000;

//Serve static files from the styles directory:
app.use(express.static("./styles"));

//Require filesystem module:
const fs = require("fs");

//define the template engine:
app.engine()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


//Routes:
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    DataTransfer.push({name, age});
    res.redirect('/')
})

app.get('/data', (req, res) => {
    res.json(data);
});


//Error Handling
app.use((err, req, res, next) => {
    res.status(500).send('Server Error!');
})