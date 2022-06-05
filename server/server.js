const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const path = require('path');
const xlsx = require('node-xlsx');
const fs = require('fs')


var obj = xlsx.parse(__dirname + '/testexcel.xlsx'); // parses a file

var obj = xlsx.parse(fs.readFileSync(__dirname + '/testexcel.xlsx'));
console.log(obj)


app.prepare()
.then(() => {
  const server = express()
    
  console.log(handle)
  server.get('/test', (req, res) => {
    // const actualPage = '/login'
    // const queryParams = { id: req.params.id } 
    // res.send("I am coming back from node server")
    res.sendFile(path.join(__dirname, '/login.html'));
  //  return app.render(req, res, '/login')
  })
  
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