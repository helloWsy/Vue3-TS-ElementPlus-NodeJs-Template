// const http = require('http')
// const _url = require('url')
// const fs = require('fs')
// const path = require('path')
// const mime = require('mime-types')
// const common = require('./module/common.js')
const express = require('express')
const path = require('path')
const app = express()

const myRouter = require('./routes/index')
app.use(express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({ extended: true}));

const router = express.Router()

router.get('/', (req,res,next)=>{
  res.render('index', {title:'Express'})
})

app.post('/register',(req, res)=>{
  console.log(req.body);
  res.json({
    msg:'成功2',
    data:{
      arr1:[{
        id: 1,
        name: '张三',
        age: 30
      }],
      arr2:[{
        id: 2,
        name: '李四',
        age: 20
      }]
    }
  })
})


app.get("/", (req, res) => {
  res.send('hello word')
})
 
app.post("/login", (req, res) => {
  console.log('yes');
  res.json({
    stu: 0,
    data: '111'
  })
})

// app.get("/register", (req, res) => {
//   res.send('注册')
// })

app.get("/userInfo", (req, res) => {
  console.log('get请求');
  res.send('get请求')
})

app.post("/userInfo", (req, res) => {
  console.log('post请求');
  res.send('post请求')
})

app.listen(8082) 
// http.createServer(function (req, res) {
//   const { url } = req
//   const { host } = req.headers

//   if(url === "/favicon.ico") {
//     res.end()
//     return
//   }


//   if (url !== "/favicon.ico") {
//     const myURL = new URL(url, `http://${host}`)

//     // console.log(myURL)
//     const { pathname } = myURL
//     const _pathname = pathname === '/' ? '/index.html' : pathname 
//     console.log(pathname);
//     fs.readFile(`./static${_pathname}`,async(err,data)=>{
//       if(err) {
//         res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'})
//         res.end('404这个页面不存在')
//         return 
//       }
//       const extname = path.extname(_pathname)

//       // 自定义JSON文件
//       // const mime = await common.getFileMime(extname)

//       res.writeHead(200, {'Content-Type': `${mime.lookup(_pathname)};charset=utf-8`})
//       res.end(data)
//       return
//     })
//   }
// }).listen(8081)

console.log('Server running at http://127.0.0.1:8082/')
