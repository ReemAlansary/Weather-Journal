const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const e = require('express');
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const projectData = {};

app.get('/logs', async(req, res) => {
    res.send(projectData);
});

app.post('/endpoint', (req, res) => {
    projectData[req.body.zip] = {
        date: req.body.date.substring(0,10),
        temp: req.body.temp,
        feels: req.body.feels,
        content: req.body.feelings
    }
});