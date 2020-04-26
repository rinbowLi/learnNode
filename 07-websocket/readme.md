长连接（socket(没有跨域问题)） 和短连接（ajax）

实现socket的方式
1. net (node内置模块)
2. socket.io 麻烦 但是兼容性最好
3. websocket h5新增特性 低版本浏览器兼容性不好，但是使用方式简单

前后端连接
1. 搭建socket服务器 new WebSocket.server({prot:8080},()=>{})
   ws.on('connection')

2. 前端进行连接 new WebSocket("ws//localsocket:8080")
  ws.onOpen()

数据交互
client.on('message',()=>{})

3. 前端主动发送数据

4. 后端主动发送数据
   ws.onmessage=()=>{}
   ws.send()
前后端断开连接的处理


ws.on('close')
ws.onClose()
5. 断开连接


什么时候采用长连接（使用场景）
1. 实时刷新（轮询）
2. 服务器端发起数据
