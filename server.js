/* these lines load the libraries and create variables that give us access to all
of the methods that are built into each library */
const express = require("express");
const cors = require("cors");
const pingRouter = require("./routes/ping");
const chuckRouter = require("./routes/chuck");
const mathRouter = require("./routes/math");

/* calls the express() function from the express library, creating your 
Express app */

const app = express();

/* declares the port 5000 */
const port = 5000;

/* enables the Express server to respond to requests, makes your server 
accessible to any domain that requests a resource from your server via a browser */

app.use(cors());

/* a method that is built into Express to recognize the incoming requests 
as JSON Objects. This method is called as a middleware in your application, 
which means it is a method/function/operation that is called between processing
an incoming request and returning a response */
app.use(express.json());

app.use(pingRouter);
app.use(chuckRouter);
app.use(mathRouter);

// what does this do?
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
