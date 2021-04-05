const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render("index");
});

router.get('/cotizacion',(req,res)=>{
    res.render("cotizacion");
});

router.get('/empleo',(req,res)=>{
    res.render("empleo");
})

module.exports = router;