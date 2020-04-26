## 身份验证

因为http请求是无状态的

1. 登陆的时候发布一个加密字符串（包含用户信息） 给前端
2. 调用其他接口 将加密字符串 作为参数传递给服务器
3. 根据权限进行验证

所以有了session（服务器端）+cookie（客户端） 和
（cookie-parser插件）和（express-session插件）
jwt