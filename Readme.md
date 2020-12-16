This is going to be my first express application. 
Express is a framework based on node.js.

I'm going to document my steps for future reference.
To use [express](https://expressjs.com/en/4x/api.html) you need to have [node.js](https://nodejs.org/en/) installed.


- start out by using ***npm init -y*** to generate the package.json
- next you can install express using ***npm i express*** in the folder containing the json package.
- once the modules are generated make an index.js file and ***require("express")***, store in var for easy access
- pro tip: use ***console.dir()*** and run your app using ***node index.js*** to see all properties/methods of the express object.

- call ***.listen*** method on app to start listening for requests and navigate to localhost:portnumber. You should see a cannot GET / if done correctly.

- use the ***.send*** method to send a request

- ***app.get*** couples a route with corresponding code from the ***res.send() method.***

