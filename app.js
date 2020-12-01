const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use('/api',require('./routes/mock'))

app.listen(PORT,function () {
  console.log(`Example app listening at http://localhost:${PORT}`)
})