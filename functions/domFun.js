function _get_parent_(query){
    return document.querySelector(query)
}

function _create_element_(tagName, value, parentEle){
    const newElement = document.createElement(tagName)
    newElement.textContent = value
    parentEle.append(newElement)
    return newElement
}

function _delete_(element){
    element.remove()
}

const parent = _get_parent_("#demo")

_create_element_("h1", "Hello There 1", parent)

const eleTobeDelete = _create_element_("h1", "Hello There 2", parent)

_create_element_("h1", "Hello There 3", parent)
_create_element_("h1", "Hello There 4", parent)
_create_element_("h1", "Hello There 5", parent)

// ctrl + alt + arrow down or up

_delete_(eleTobeDelete)