const express = require('express')
const cors =  require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).send("<h1>gggggg<h1>")
})

app.post("/login", (req, res) =>{
  const myUser = {
    email: "federico.gramajo@gmail.com",
    password: "123456789"
  }
  if (req.body.email !== myUser.email) {
    return res.status(400).send({
      error: true,
      message: "El Email no esta registrado"
    })
  }

  if (req.body.password !== myUser.password) {
    return res.status(400).send({
      error: true,
      message: "La Contraseña no es correcta"
    })
  }

  return res.status(200).send({
    success: true,
    message: "El usuario entro correctamente(?)",
    user: myUser
  })
})

app.listen(process.env.PORT || 4000, () =>{
  console.log("Servidor andando en el localhost 4000")
} )

/*CLASE 08/11*/
