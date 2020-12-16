const express = require('express');
const app = express();

app.use((req,res) =>{
    console.log("We got a new request people, look sharp!")
    // res.send("You requested, we respond. This is our response to you!")
    // res.send({color:'red'});
    res.send("<h1>Cool looking website you've got here!</h1>");
})


app.listen(3000, () =>{
    console.log("I'm listening on port 3k, sir!")
})
