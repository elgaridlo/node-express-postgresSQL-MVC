const express = require('express')
const bodyParser = require('body-parser')
const { request, response } = require('express')
const app = express()
const port = 3000
const db = require('./configureDB')
const disc = require('./view/discount_cal_view')
// const tes = require('./model/discount_model')
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded(
        {extended: true}
    )
)

app.get('/', (request, response)=>{
    response.json({info: 'Node js running ...'})
})
app.post('/data', (request, response) => {
    console.log('request = ', request.body)
    response.send({berhasil: 'yea'})
} )

app.use('/', disc)

//app.get('/discount', tes.getUsers)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

//app.get('/discount/:id', db.getUserById)
// app.get('/discount', disc.)
// app.post('/discount', db.createUser)