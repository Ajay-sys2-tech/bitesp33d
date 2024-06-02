import express from 'express';
import bodyParser from 'body-parser';
import './db/conn.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello world')
})


app.listen(3000, () => {
    console.log('server started on port 3000')
})