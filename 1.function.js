//Function

/**
 * Function ialah pengelompokan block code menjadi satu, yang dapat digunakan kembali.
 * Adanya function agar tidak terjadi Redundant (pemborosan code)
 * 
 * Terdiri dari 3 hal, yaitu:
 * Parameter =  saat mendeklarasikan function, parameter ini dapat ditentukan. Parameter menerima "input" dan melakukan tugas menggunakan "input" tersebut.
 *              kalau parameternya lebih dari satu, maka pemisahnya menggunakan koma.
 *              untuk tipe data yang digunakan untuk parameter boleh apa saja, asalkan relevan dengan fungsinya. 
 * Procedure
 * Return Value
 * 
 * Terdapat 3 cara untuk mendeklarasikan function
 * 1. function deklarasi ES5
 * 2. function expression, function yang digunakan disini sebenarnya anonymous function
 * 3. arrow function ES6
 * 
 * function bisa hoisting kalau menggunakan deklarasi ES5
 * 
 * jangan lupa untuk memanggil function harus di INVOKE
 * 
 * nama function harus merepresentasikan apa yang akan dikerjakan
 * 
 * nama function tidak bisa duplicate digunakan saat membuat function baru (TIDAK BISA REDECLARE)
 * 
 * Higher Order Function, sebuah fungsi yang menerima fungsi lain didalam parameter (Function Callback)
 */

// function luasPersegiPanjang (panjang, lebar) { // yang didalam bracket merupakan parameter
    //  code didalam sini akan dijalankan ketika di INVOKE
//     let result = panjang * lebar;
//     return result // return
// }
// let resultPersegiPanjang = luasPersegiPanjang(4, 2) // prosedural/argument
// console.log(resultPersegiPanjang);

// ======================================================================================================

// Pembahasan Pertama tentang FUNCTION


let panjangParameter = 8
let lebarParameter = 5
// cara memanggil function itu harus di invoke
let hasilDariFunction = luasPersegiPanjang(panjangParameter, lebarParameter) // Function ES5 masih bisa hoisting
console.log(hasilDariFunction);

// penulisan deklarasi function
function luasPersegiPanjang(panjang, lebar) {
    // console.log(panjang, "==> Ini Panjang");
    // console.log(lebar, "==> Lebar");  
    let result = panjang * lebar
    // console.log(result);
    return result
    // Setelah return tidak akan menjalankan lagi code dibawahnya
    let usingMeter = `${result} m`
    console.log(usingMeter);
}

// 3 cara mendeklarasikan function expession

// 1.
// INI CARA KEDUA MENDEKLARASIKAN function expression, function yang digunakan disini sebenarnya anonymous function
let luasLingkaran = function (jari2) {
    console.log("Hafizh Tanpa Pemanis Buatan");
    let result = 3.14 * (jari2 * jari2)
    return result
}
let hasilLingkaran = luasLingkaran(3)
console.log(hasilLingkaran, "=> Ini yang diminta mas Eric"); // => INI MERUPAKAN INVOKE DARI FUNCTION
// Ketika membuat function JANGAN LUPA DI INVOKE

// 2.
// Deklarasi Arrow Function
let greeting = (name) => {
    let say = `Hello Mr. ${name}`
    return say
}
let hasil = greeting("Baim Si Mr Dark Joke")
// console.log(hasil);


// Kita buat function callback
let inputArray = ["Eric", "Enggar", "Baim"]
function lowerCaseAll(param, callback) {
    let tampArray = []
    param.forEach ((el) => {
        tampArray.push(callback(el))
    })
    // console.log(tampArray, "==?");
    return tampArray
}
function lowerSingle (word) {
    console.log(word.toLowerCase());
    // return str.toLowerCase();
}
let resultLowerCaseAll = lowerCaseAll(inputArray, lowerSingle)
// console.log(resultLowerCaseAll);