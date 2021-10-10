const express = require('express')
const data = require('./data')
const app = express()

var cors = require('cors')

app.use(cors())

app.use(express.json())

app.get('/api/products/:id', (req, res) => {
  const Id = req.params.id
  console.log('this is the id', Id)
  const product = data.products.find((x) => x._id == Id)

  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ msg: 'product not found' })
  }
})

app.get('/api/prod', (req, res) => {
  const Id = 2

  const product = data.products.find((x) => x._id == Id)
  console.log('this is the id', product)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ msg: 'product not found' })
  }
})

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.listen(5001, () => {
  console.log('server started at port 5001')
})
