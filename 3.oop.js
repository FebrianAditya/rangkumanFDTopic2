// Object itu barang/benda yang bisa diliat

// OOP (Object Oriented Programing) dalam bahasa JavaScript.
// Ini merupakan konsep, namanya konsep di bahasa lain pun sama.
// sebenernya OOP didalam JS belum sempurna

/**
 * Sebelum adanya OOP, dulu di JS banyak menggunakan modular function, semenjak ES6 di JS menerapkan suatu class OOP. 
 * class OOP dibanding dengan modular function, class OOP lebih gampang untuk di tracing ketimbang si function modular. Class pun mempunyai aturan2 yang bisa membantu kita.
    data di class pun bisa di hiden (Encapsulation).
 */

// Object Oriented Programing, merupakan sebuah paradigma abstraction yang digunakan di codingan,
// contoh membuat models didunia nyata kedalam kodingan.

/**
 * 4 Pilar konsep OOP
 * 
 * Inheritance // Pewarisan (Mewariskan yang dipunya class Parent ke class Child)
 *    a. Property di parent harus mengakomodasi property yang dimiliki child-nya
 *    b. INGAT property private tidak boleh diakses langsung oleh class childnya (HARUS PAKAI SETTER & GETTER)
 *    c. Untuk pakai property yang ada di class parent pakai "super()"
 * 
 * Encapsulation // membuat property menjadi privtate (melindungi property yang ada di class tersebut)
 *    a. Property private dapat diakses langsung dan dirubah langsung hanya di classnya itu sendiri
 *    b. Property private hanya boleh diakses diluar class kalau menggunakan getter
 *    c. Property private hanya boleh diubah melalui setter apabila ingin dirubah diluar classnya
 *   
 * Abstraction // 
 *    kalian bisa menggunakan fitur yang ada di class tersebut tanpa harus tahu seperti apa prosesnya
 * 
 * Polymorphism (Overridding)
 *    a. menggunakan method yang sama dengan yang ada di parent tapi hasilnya berbeda
 *    b. method di parent harus ada, dan diganti di child dengan nama method yang sama
 * 
 */

/**
 * Penggunaan nama class harus pascal case dan singular
 * didalam classnya HARUS ada constructor
 */

// ini cara membuat OOP
// class Phone {
//     constructor(bluetooth, ram, camera, infraRed = false) { // ==> Ketika di instance, maka constructor ini akan otomatis jalan
//         this.bluetooth = bluetooth // ini harus pakai this
//         this.ram = ram
//         this.camera = camera
//         this.infraRed = infraRed
//         this._imei = "1203948444" // ini private
//     }
//     // contoh diatas, parameter infraRed menggunakan default parameter 
//     // constructor ini hanya boleh ada satu di class
//     // didaLam constructor tidak boleh ada proses logical, dan manipulation data 

//     // ===========
//     // ini cara buat function di dalam class
//     // ini instance methode, kenapa pakai instance method namanyanya? karena method ini hanya bisa dipanggil dengan instance
//     upgradeRam(newRam) {
//         this.ram = newRam // ini harus pakai this
//     }

//     //===========
//     getRamAndCamera() {
//         return `${this.ram} ${this.camera}`
//     }

//     //cara akses private property
//     get imei () { // getter
//         return this._imei
//     }

//     // cara rubah value property private dari luar class
//     set imei (imei) {
//         this._imei = imei
//     }

// }
// let iPhoneEleven = new Phone (true, "16 Gb", "24 MP") // ini lebih flexible
// let sonyZ300 = new Phone (true, "2 GB", "2 MP", true) // ini lebih flexible

// // sonyZ300.upgradeRam("16 GB") // INI PENGGUNAAN DARI METHODE

// console.log(iPhoneEleven);
// console.log(sonyZ300);
// console.log(iPhoneEleven.camera); // ini cara akses proprtynya aja
// console.log(iPhoneEleven.getRamAndCamera());

// pertanyaan, gimana kalau default parameternya ditengah? (solvednya pakai undefined di tengah argumentnya)

// =================================================================================

// Didalam OOP itu ada yang namanya method, artinya function didalam class ysng akan melakukan proses logical

// =================================================================================
// Inheritance 
// Bisa diwariskan (bisa diturunkan dari parent ke child)


// =================================================================================
// encapsulation
/**
 * kalau didalam class nya itu sendiri, untuk merubah property private dan akses boleh langsung menggunakan this, tanpa masukin dulu kedalam method.
 */

console.log(iPhoneEleven.imei); // ini cara akses property yang di private
iPhoneEleven.imei = "9999"
console.log(iPhoneEleven.imei); // ini cara rubah value private property dari luar class