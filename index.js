const express = require('express');
const app = express();

// app.use((req,res) =>{
//     console.log("We got a new request people, look sharp!")
//     // res.send("You requested, we respond. This is our response to you!")
//     // res.send({color:'red'});
//     res.send("<h1>Cool looking website you've got here!</h1>");
// })

app.get('/kirby', (req,res) =>{
    res.send("I see you have found the route to this code, congrats!")
})

app.get('/search', (req,res) =>{
    const { q } = req.query;
    res.send(`<h1>Search results for: ${q}`);

})


app.get('/', (req,res) =>{
    res.send("This is supposed to be a homepage but it's blank for now! Yay learning!")
})
app.post('/kirby', (req,res) =>{
    res.send("This is totally different than a get request. This is a POST request. Radical!")
})

app.get('*', (req,res) =>{
    res.send("I have no clue what route you want to go to here!")
})

app.listen(3000, () =>{
    console.log("I'm listening on port 3k, sir!")
})
