const express = require('express')
const bodyParser = require('body-parser')

const { Project } = require('./sequelize')
const app = express()

app.use(bodyParser.json())

app.use((req,res,next)=>{
    console.log("App output");
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
    if(req.method === "OPTIONS"){
      return res.sendStatus(200);
    }
    next();
  })

// API ENDPOINTS
app.get('/api/p', (req, res) => {
    Project.findAll().then( (data) => {
        res.status(200).send({ data: data, msg: "Cars retrieved" })
      }).catch( err => next(err))
      

})

const port = 3001
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})