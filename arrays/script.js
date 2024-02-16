function getElement(query){
    return document.querySelector(query)
}

const element = getElement(".demo")

function _create_element_(tagName, value, parentEle){
    const newElement = document.createElement(tagName)
    newElement.textContent = value
    parentEle.append(newElement)
    return newElement
}

// // arr[]
// const array2 = Array(4)

// // arr[,,,] + arr[1]
// array2.push(1)

// // arr[0] + arr[,,,1]
// array2.unshift(0)
// const array1 = [1,2,3,4]
// array1[3] = array2

// // [1,2,3,[0,,,,,1]]
// element.textContent = array1
// console.log(array1)

const array = [1,2,3,4]

// i stand for index

// for(let i = 0; i < array.length; i++){
//     _create_element_("h1", array[i], element)
// }

array.forEach(function(arr) {
    _create_element_("h1", arr, element)
});

