const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World !')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((req , res) =>{
  console.log("request received");
  // console.log(req);
  res.send("this is basic responce")
  // res.send()
  
})
