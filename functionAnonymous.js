// membuat variabel angka1 untuk melakukan input data 
let num1 = parseInt(prompt("Masukkan Angka Pertama :"));
// membuat variabel angka1 untuk melakukan input data 
let num2 = parseInt(prompt("Masukkan Angka Kedua :"));
// membuat variabel operator untuk melakukan pemilihan operator yang diinginkan
let operator = prompt("Masukkan Operator yang dipilih : +, -, *, /, %, **");
// membuat variabel result 
let result = "";

// membuat variabel hasil yang valuenya berupa function anonymous berupa parameter a dan b
let hasil = (function (a, b) {
    // melakukan pengkondisian yang dimana ketika memilih operator 
    switch (operator) {
        // jika pilih tambah maka dilakukan operasi pertambahan
        case "+":
            result = a + b;
            break;
        // jika pilih kurang maka dilakukan operasi pengurangan
        case "-":
            result = a - b;
            break;
        // jika pilih kali maka dilakukan operasi pekalian
        case "*":
            result = a * b;
            break;
        // jika pilih bagi maka dilakukan operasi pembagian
        case "/":
            result = a / b;
            break;
        // jika pilih modulus maka dilakukan operasi sisa hasil bagi
        case "%":
            result = a % b;
            break;
        // jika dipilih pangkat maka dilakukan operasi pemangkatan
        case "**":
            result = a ** b;
            break;
        // selain itu maka operator tersebut tidak ada
        default:
            result = "Operator tidak ada!!"
            break;
    }
})
// memanggil variabel untuk melakukan operasi arimatika
(num1, num2);
// menampilkan pesan alert
alert(result);


