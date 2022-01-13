// Ini praktek yang pakai INHERITANCE, ENCAPSULATION, ABSTRACTION, dan POLYMORPHISM

class Animal { // ini class parent nya
    constructor(name, color, karnivora) {
        this._name = name // ini Encapsulation
        this.color = color
        this.karnivora = karnivora
    }
    
    // getter fungsinya buat mengambil value yang di hidden/private.
    get nameAnimal() { // ini Encapsulation
        return this._name
    }

    // setter fungsinya untuk merubah value yang di hidden/private.
    set nameAnimal(param) { // ini Encapsulation
        this._name = param
    }

    greeting() {
        console.log(`Hello my name is ${this._name}`) // ini gpp langsung akses private property, karena masih sama satu class
    }
}

class Zebra extends Animal{ // ini class childnya
    constructor() {
        super("Zebra", "black and white", false) // pakai super untuk pakai property yang ada di class parent
        this.leg = 4
    }
    greeting() {
        console.log(`Hallo, i'm cute animal`); // ini polymorphism yang Overridding method dari parent childnya
    }
}

class Lion extends Animal{ // ini class childnya
    constructor() {
        super("Lion", "brown", true)
        this.leg = 4
       
    }
}

class Shark extends Animal{ // ini class childnya
    constructor() {
        super("Shark", "grey", true)
        this.color = "grey"
    }
}

let iniZebra = new Zebra()
// let iniLion = new Lion().greeting()
let cobain = new Lion()
cobain.nameAnimal = "Maung" // ini cara nge setter

let iniShark = new Shark()
console.log(cobain, "==> ini");

console.log(iniZebra, "==> INI YANG ZEBRA");
// console.log(iniLion, "==> INI YANG Lion");
console.log(iniShark, "==> INI YANG Shark");