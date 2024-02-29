const demo = document.querySelector(".demo")

// const myPromise = new Promise( function(resolve, reject){
//     setTimeout(function(){
//         const data = "Bla Bla"
//         resolve(data)
//         reject(Error)
//     }, 2000)
// })

// myPromise.then(function(data){
//     demo.textContent = data
// }).catch(function(error){
//     demo.textContent = error
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos/2').then(response => response.json()).then(json => {
      document.querySelector(".demo").innerHTML = `<h1>${json.title}</h1> <br> <h3>${json.userId}</h3>`
})
