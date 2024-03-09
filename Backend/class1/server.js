// create http server 

//import http server
const http=require('http')

//creste server
let httpServer=http.createServer()

//assign port number
httpServer.listen(4000,()=>console.log("http server running on port 4000 "))
