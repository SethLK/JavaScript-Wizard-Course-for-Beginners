function get_parent_(query){
    return document.querySelector(query)
}

function create_element_(tagName, value, parentEle){
    const newElement = document.createElement(tagName)
    newElement.textContent = value
    parentEle.append(newElement)
    return newElement
}

const parent = get_parent_(".container")


// for loop
// for(var i=1; i <= 10; i++){
//     create_element_("h1", `Loop ${i}`, parent)
// }

// while loop

let counter = 1
do{
    create_element_("h1", `Counter ${counter}`, parent)
    counter++
}while(counter <= 10)

// 1000