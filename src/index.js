const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000 || process.env.PORT

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile('/index.html')
})

app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`)
})