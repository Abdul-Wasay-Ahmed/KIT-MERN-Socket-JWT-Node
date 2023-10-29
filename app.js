const express = require('express');
const http = require('http'); //default node package
const socketIO = require("socket.io")
var jwt = require('jsonwebtoken');


const app= express()

app.get('/' ,express.static(__dirname + '/public')   )


const PORT = 9000
const server = http.createServer(app)
const io = socketIO(server)


io.on('connection' , (socket)=>{
    console.log(`A new user with ${socket.id} has connected`)
   
   socket.on("message" , (data)=>{
    socket.broadcast.emit("message" , data)


   })
})

const userdata = {

    NAME:"ALI",
PHONE:3214

}

const token = jwt.sign({

    NAME:"ALI",
PHONE:3214

},'secret')
console.log("THE TOKEN:", token) 
const verify = jwt.verify(token , 'secret')
 
console.log("VERIFY TOKEN:", verify)


server.listen(PORT , ()=>{
    console.log(`app is running on port  ${PORT}`)
})