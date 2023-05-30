const express = require('express')
const parser = require('body-parser')
const {Configuration,OpenAIApi } = require('openai');
const app = express()
const port =  5000
const config = new Configuration({
    apiKey:""//Enter your api key here
});
const openai = new OpenAIApi(config);
var jsonParser = parser.json();
app.use((req,res,next)=>{
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
 
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
 
    // Pass to next layer of middleware
    next();
 })
 
app.get('/solve',jsonParser ,async(req, res) => {

  var p = req.query.ques;
  console.log(p);
  p = p +" No explanation neeeded, just return answer value only. ";
  
  const response = await openai.createChatCompletion({
    model:"gpt-4",
    messages:[{
        role: "user",
        content:p
    }
    ]
    
  })
 console.log(response.data.choices[0].message.content)
  res.send({answer: response.data.choices[0].message.content});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})