const express = require("express");
const app = express()

app.use(express.json());
 



const port = 5000


app.get("/", (req, res)=> {
    res.send("Hello World!");
   
 });



 app.listen(port, async () => {
    console.log(`The app is listening on PORT ${port}`);
  });