require('dotenv').config()
const express = require('express')
// const controller = require('./controller')
const massive = require('massive');
const { CONNECTION_STRING, SERVER_PORT } = process.env
const inCtrl = require('./controller')

const app = express()

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db)
    console.log('Jesus Wept!')
})

app.get('/api/inventory', inCtrl.getItems)
app.post('/api/product', inCtrl.addItems)
// app.get('/api/item/:id', inCtrl.getItem)

app.listen(SERVER_PORT, () => console.log(`port running on ${SERVER_PORT}`))