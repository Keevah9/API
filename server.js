const express = require('express')
const app = express()
const PORT = 8000

const Ogunniyi = {
    'keevah':{
        'age': 27,
        'birthName': 'Keevah',
        'birthLocation': 'Lagos, Nigeria'
    },
    'samson':{
        'age': 31,
        'birthName': 'Samson',
        'birthLocation': 'Kwara, Nigeria'
    },
    'tiwa':{
        'age': 3,
        'birthName': 'Tiwa',
        'birthLocation': 'Ogun, Nigeria'
    },
    'unknown':{
        'age': 'Unknown',
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    },
}

app.get('/',  (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res) => {
    const names= req.params.name.toLowerCase()
    if (Ogunniyi [names]){
        res.json(Ogunniyi [names])
    }else{
        res.json(Ogunniyi ['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The Server is running on port ${PORT}! You better go catch it!`)
})