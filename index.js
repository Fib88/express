const express = require('express');
const app = express();

app.use(() =>{
    console.log("We got a new request people, look sharp!")
})


app.listen(3000, () =>{
    console.log("I'm listening on port 3k, sir!")
})
