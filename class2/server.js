// create http server 

//import http server
const http=require('http')
const url=require('url')

//create server
let httpServer=http.createServer((reqobj,resobj)=>{
    // //to check the type of http request we use method property
    //  console.log(reqobj.method)
    // //to check URL path
    // console.log(reqobj.url)
    // //to check query parameters 
    // console.log(url.parse(reqobj.url,true).query)
    // //to check headers
    // console.log(reqobj.headers)

    if(reqobj.method==='GET'){
          if(reqobj.url==='/test1'){
            resobj.end('res for test-1 path')
          }
          if(reqobj.url==='/test2'){
            resobj.end('res for test-2 path')
          }
    }

    if(reqobj.method==='POST'){
            if(reqobj.url==='/create-user1'){
            resobj.end('USER IS CREATED')
            }
            if(reqobj.url==='/create-product'){
            resobj.end('PRODUCT IS CREATED')
            }
    }

    if(reqobj.method==='DELETE'){
        resobj.end('DATA DELETED')

    }

    if(reqobj.method==='PUT'){
        
        resobj.end('DATA UPDATED')
        
    }


})

//assign port number
httpServer.listen(5000,()=>console.log("http server running on port 5000 "))
