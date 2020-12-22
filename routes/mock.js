const express = require('express')
const router = express.Router();
var novaSales = require('../db/nova_sales.json')
var novaValue = require('../db/nova_value.json')
router.get('/nova_dynamic-form',(req,res)=> {
  res.status(200).json(novaSales)
})
router.get('/nova/getValue',(req,res)=> {
  res.status(200).json(novaValue)
})
module.exports = router