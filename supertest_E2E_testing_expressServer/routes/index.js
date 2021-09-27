const express = require('express');
const router = express.Router();

router.post('/register',(req,res,next)=>{
    if(!req.body.firstName){
        res.status(400).json('you need to pass a firstname');
        return;
    }
    res.status(201).json({
        message: '✔ Success'
    });;
});


module.exports = router