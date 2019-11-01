const express = require('express')
const cors =  require('cors')
const bodyParser = require('body-parser')

const myUser = {
  email: "federico.gramajo@gmail.com",
  password: "123456789"
}

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).send("mira pelado")
})

app.post("/login", (req, res) =>{
  console.log(req.body)
  if (!req.body.email){
    res.status(400).send({
      success: false,
      message: "email is required",
    })
  }
  if (!req.body.password){
    res.status(400).send({
      success: false,
      message: "Password is required",
    })
  }
  if (req.body.email !== myUser.email
  || req.body.password !== myUser.password){
    return res.status(401).send({
      succes: false,
      message: "user not exist"
    })
  }
  return res.status(200).send({
    success: true,
    message: "user logged successfully",
    user: myUser
  })
})

app.listen(4000, () =>{
  console.log("Servidor andando en el localhost 4000")
} )
