// Perlu diingat bahwa OOP di JS BELUM SEMPURNA

class Phone {
    constructor(name, ram = "16 GB", bluetooth = true) {
        // disini ga boleh ada proses logical
        this.name = name
        this.ram = ram
        this.bluetooth = bluetooth
        // this.infraRed = true
    }
}

let iPhoneEleven = new Phone("I phone elven", undefined, false);
let samsungS7 = new Phone("Samsung S7", "12 GB", true)
let nexian = new Phone()
console.log(iPhoneEleven);

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    // ini cara buat method
    greeting() {
        return `Halooo mas ${this.firstName} ${this.lastName}`
    }
}

// ini cara manggil class (Instance)
let personBanuAjie = new Person("Nugraha", "Banuajie") // Instantiate
// ini cara manggil method
let greetingSay = personBanuAjie.greeting()
console.log(greetingSay);


class Menu {
    constructor(pembuka, utama) {
        this.pembuka = pembuka
        this.utama = utama
    }

    diskon() {
        return `Lagi diskon makanan ini loh ${this.pembuka} dan ${this.utama}`
    }
}

let diskonHappyHour = new Menu("kentang Goreng", "Gado-gado");
let greetingDiskon = diskonHappyHour.diskon()

console.log(diskonHappyHour.pembuka, "===> INI PEMBUKA");
console.log(greetingDiskon);