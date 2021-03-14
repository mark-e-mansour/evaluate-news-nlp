const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const fetch = require("node-fetch")
const api_key = process.env.API_KEY

app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/analysis', function (req, res) {
    var url = req.body.url
    const result = fetch('https://api.meaningcloud.com/sentiment-2.1?key=' + api_key + '&lang=en&of=json&url='+ url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(response => response.json())
        .then(response => {
           return response
        })

        result.then(function(response) {
            //console.log(response) // "Some User token"
            res.send(response)
         })
       //console.log(result)
        //res.send(result)
})
