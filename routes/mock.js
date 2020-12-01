const express = require('express')
const router = express.Router();
var novaSales = require('../db/nova_sales.json')
router.get('/nova_dynamic-form',(req,res)=> {
  res.status(200).json(novaSales)
})

module.exports = router