const fs = require('fs')




exports.getFileMime = async extname=>{
  return new Promise((resolve,reject)=>{
    fs.readFile('./data/mime.json',(err,data)=>{
      if(err) {
        reject(err)
      }
      resolve(JSON.parse(data.toString())[extname.substr(1)])
    })  
  }) 
}