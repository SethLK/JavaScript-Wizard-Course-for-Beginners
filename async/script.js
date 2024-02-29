async function fetchData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/4')
        const data = await response.json()
        document.querySelector(".demo").textContent = data.title
    } catch (error) {
        console.error(error)
        throw error
    }
}

fetchData()
/* try {
    if bla bal = true

// } catch (error) {
    
// }
*/