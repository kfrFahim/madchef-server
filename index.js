const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

const chefdata = require("./data/chefdata.json")


app.get("/" , (req ,  res) =>{
     res.send("My server is running baby")
} )

app.get("/chefdata" , (req , res) => {
     res.send(chefdata)
})



app.listen(port , ()=> {
     console.log(`Server app listening on port ${port}`)
})