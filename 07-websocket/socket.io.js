const express = require("express")
const app =express()
const server =require("http").Server(app);
const io =require("socket.io")(server)
//将socket服务器和express相结合

app.use(express.static(__dirname+"./client"))


//客户端连接
io.on("connection",(socket)=>{
    setInterval(()=>{
        socket.emit('list',"123")
    },1000)

    socket.broadcast.emit("list","test");
    socket.on("backend",(msg)=>{
        console.log(msg)
    })

    socket.on("receive",(msg)=>{
        console.log("从前端传输的消息"+msg)
        socket.broadcast.emit("message",msg)
    })
});


//0.0.0.0代表所有ip可以访问
server.listen(8081,"0.0.0.0")



