const demo = document.querySelector(".demo")

// class Person{
//     constructor(Name, Age){
//         this.inClassName = Name
//         this.inClassAge = Age
//     }

//     greet(){
//         return `<h1>Hello my name is ${me.inClassName} and I am ${me.inClassAge} years old.</h1>`
//     }
// }

// const me = new Person("Codel", 3)

class Car{
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year
    }

    getInfo(){
        return `<h1>Brand: ${this.brand}, Model: ${this.model}, Year:${this.year}</h1>`
    }
}

class ElectricCar extends Car{
    constructor(brand, model, year, battery){
        super(brand, model, year)
        this.brand = brand
        this.model = model
        this.year = year
        this.battery = battery
    }

    getElectricCarInfo(){
        return `<h1>Brand: ${this.brand}, Model: ${this.model}, Year:${this.year}</h1>, Battery: ${this.battery}`
    }
}

const myCar = new ElectricCar("tesla", "s3", "2023", "200 kw")

demo.innerHTML = myCar.getElectricCarInfo()

