const express = require('express')
const app = express()
const port = 3000

app.get('/:username/:id', (req, res) => {
  console.log(req.params);
  
  res.send(`hello ${req.params.id}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.use((req , res) =>{
//   console.log("request received");
//   // console.log(req);
//   res.send("this is basic responcef")
//   // res.send()
  
// })
