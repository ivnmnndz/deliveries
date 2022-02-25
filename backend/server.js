const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

app.use('/api/routes', require('./routes/deliveryRoutes'))

app.listen(port, ()=> console.log(`server started on port ${port}`))
