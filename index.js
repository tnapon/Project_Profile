const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();

//Template engine setting
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

//router
app.use('/profile', router);

//Middleware
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.send("<h1>Test </h1>")
// })

app.listen(
    3000,
    () => {
        console.log("Listening to port 3000");
    }
);

