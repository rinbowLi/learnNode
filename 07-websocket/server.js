const WebSocket = require('ws')


//创建一个websocket服务器，监听8080端口
const ws = new WebSocket.Server({
    port: 8080
}, () => {
    console.log('websocket 已开启')
})

let clinets=[];
ws.on('connection', (clinet) => {
    clinet.send('你好') //数据传输只能字符串
    clinets.push(clinet)
    clinet.on('message', (msg) => {
        console.log('来自前端的数据', msg)
        if(msg.indexOf("广播")>-1){
            sendAll("测试广播")
        }
    })
    clinet.on('close', (msg) => {
        console.log('前端主动断开连接', msg)
    })
})

function sendAll(msg){
    for (let index = 0; index < clinets.length; index++) {
        const element = clinets[index];
        element.send(msg)
        
    }
}