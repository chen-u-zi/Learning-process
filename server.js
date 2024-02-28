// 引入Node.js的http模組
const http = require('http')

// 設定服務器的主機名和端口
const hostname = '127.0.0.1';
const port = 8000;

// createServer() 要傳入的參數是 function
const server = http.createServer(hello);

// 兩個參數分別是 request 和 response，這裡使用命名慣例寫法
function hello(req, res) {
  console.log(req.url)  // 印出 req 網址
  res.write('Hello everone, my name is Chen U Zi. Nice to meet you!')   // 指定 respone 回傳內容
  res.end()   // 結束這個 response
}

// 服務器開始監聽指定的端口和主機名
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});