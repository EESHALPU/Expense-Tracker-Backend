const express = require('express')
const app = express()
const PORT =5000;
const bodyParser = require('body-parser')
const trackerController = require('./controller/trackerController')
app.use(bodyParser.json())
var cors = require('cors')
app.use(cors())


app.all('/*', (request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Content-Type, api_key, Authorization, x-requested-with, Total-Count, Total-Pages, Error-Message');
    response.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, OPTIONS');
    response.header('Access-Control-Max-Age', 1800);
    next();
});

app.post('/addIncome',async(req,res)=>{
    let income = await trackerController.addIncomeBalance(req)
    res.send({incomeBalance:income})
})

app.get('/',async(req,res)=>{
    let data = await trackerController.getIncomeBalance(req)
    res.send({accountBalance:data})
})

app.post('/add',async(req,res)=>{
    let response= await trackerController.addExpenseData(req)
    res.send(response)
})

app.get('/list',async(req,res)=>{
    let list = await trackerController.getExpenseList(req)
    res.send(list)
})


app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)})