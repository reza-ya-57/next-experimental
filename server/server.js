const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()
    
  console.log(handle)
  server.get('/test', (req, res) => {
    // const actualPage = '/login'
    // const queryParams = { id: req.params.id } 
    res.send("I am coming back from node server")
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