const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/', (req, res) => {
    res.render('index.hbs', { myData });
});
router.get('/aboutme', (req, res) => {
    res.render('about.hbs', { myData });
});
router.get('/skills', (req, res) => {
    res.render('skills.hbs', { myData });
});
router.get('/contact', (req, res) => {
    res.render('contact.hbs', { myData });
});

// router.get('/education',(req,res)=>{
//     res.send("<h1>My Education</h1>");
// });
// router.get('/workexperience',(req,res)=>{
//     res.send("<h1>My Work Experience</h1>");
// });


module.exports = router;