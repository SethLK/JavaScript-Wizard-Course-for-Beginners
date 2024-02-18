async function fetchData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(error)
        throw error
    }
}


/* try {
    if bla bal = true

// } catch (error) {
    
// }
*/