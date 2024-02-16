const Person = {
    name: "Codemal",
    age: 2,
    greet: function(){ //method
        alert(`Hello my name is ${this.name}`)
    },
}

const demo = document.querySelector(".demo")

demo.textContent = Person["name"]
Person.greet()

// Javascript object notations
