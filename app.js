const express = require('express');
const router = require('./routes/router');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(router);

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})