function getdata()
{
    //make http request

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response=>response.json())
  .then(data=>console.log(data))
  .catch(err=>console.log(err))

}

getdata()

console.log("hello");
