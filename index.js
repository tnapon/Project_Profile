const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

//Template engine setting
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

//router
app.use('/', router);

//Middleware
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.send("<h1>Test </h1>")
// })

app.listen(
  PORT,
  () => {
    console.log(`Listening to port ${PORT}`);
  }
);


