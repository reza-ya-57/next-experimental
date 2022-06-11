const express = require('express')
const next = require('next')

const multer = require("multer");

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
// const path = require('path');
// const xlsx = require('node-xlsx');
// const fs = require('fs')

var bodyParser = require('body-parser')
// const { Worker } = require('worker_threads');
// const { FileUpload } = require('@mui/icons-material');


const { hello } = require('../build/Release/hello.node');



// console.log(obj[0].data[1][2])
// console.log("hello")
// function runService(obj) {
//   return new Promise((resolve, reject) => {
//     const worker = new Worker('./service.js', { ojb });
//     worker.on('message', resolve);
//     worker.on('error', reject);
//     worker.on('exit', (code) => {
//       if (code !== 0)
//         reject(new Error(`Worker stopped with exit code ${code}`));
//     })
//   })
// }

// async function run() {
//   const result = await runService(obj)
//   console.log(result);
// }



app.prepare()
  .then(() => {
    const server = express()
    
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('/test', function (req, res) {
      res.send("Hello")
      hello()
      // req.file is the `avatar` file
      // req.body will hold the text fields, if there were any
    })

    // server.post('/test', (req, res) => {
    //   console.log(req.file)
    //   var obj = xlsx.parse(__dirname + '/testexcel.xlsx'); // parses a file
    //   var obj = xlsx.parse(fs.readFileSync(__dirname + '/testexcel.xlsx'));
    //   res.send(obj[0].data[1][2])
    //   // const actualPage = '/login'
    //   // const queryParams = { id: req.params.id } 
    //   // res.send("I am coming back from node server")
    //   res.sendFile(path.join(__dirname, '/login.html'));
    //   //  return app.render(req, res, '/login')
    // })

    server.get('*', (req, res) => {
      return handle(req, res)
    })


    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
