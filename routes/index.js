const express = require('express')
const router = express.Router()

router.get('/', (req,res,next)=>{
  res.render('index', {title:'Express'})
})

router.post('/index',(req, res, next)=>{
  console.log(req.body);
  res.send({
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

module.exports = router