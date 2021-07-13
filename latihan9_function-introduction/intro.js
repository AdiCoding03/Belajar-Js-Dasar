// function
// function adalah kunci utama pada javascript, yang membuat javascript sangat powerfull
// - Douglas Crockford

// function
// - Sebuah sub-program / sub-routine yang dapat 'dipanggil' di bagian lain pada program
// - merupakan struktur dasar pembentuk dari javascript
// - disebut juga sebagai prosedur (kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai)
// - untuk dapat menggunakannya, kita harus 'membuat' terlebih dahulu function tersebut, lalu 'memanggil'nya
// - termasuk kedalam first-class object

// kenapa function ??
// - Reusability (DRY : Do not Repeat Yourself)
// - Dekomposisi
// - Modularitas

// Kategori Function
// - Built-in Function
// - User-Defined Function

// Built-in Function
// - Fungsi yang sudah disediakan / 'dibuat' oleh javascript
// - Kita tinggal 'memanggil'nya saja
// - contoh :
// - alert();
// - confirm();
// - prompt();
// - dll

// Built-in Function:String
// - charAt(), slice(), split(), toString(), toLowerCase(), toUpperCase(), ...
// https://www.w3schools.com/jsref/jsref_obj_string.asp
var nama = 'Dimas adi putra';
console.log(nama.charAt(6));
// charAt(n) berfungsi untuk mencari karakter ke-n dari sebuah string. n/t: javascript selalu memulai index dari 0

// Built-in Function:Math
// - sin(), cos(), tan(), random(), round(), floor(), ceil(), log(), ...
// https://www.w3schools.com/jsref/jsref_obj_math.asp
var number = Math.random();
console.log(number);
// random() akan menghasilkan sebuah bilangan random dari 0 sampai 1

// dan masih banyak lagi built-in function lainnya

// User-Defined Function
// - Fungsi yang kita buat sendiri
// - Menggunakan keyword function
// - Nama Function(optional)
// - Parameter / Argument
// - disimpan didalam ()
// - boleh ada atau tidak, jika ada boleh lebih dari satu
// - dipisahkan oleh koma(,)
// - Function body, 'dibungkus' oleh {}
// - Dapat mengembalikan nilai(return value) atau tidak

// Membuat user-defined function 
// - Dengan deklarasi / function declaration
// - Dengan ekspresi / function expression

// Function Declaration
function jumlahDuaBilangan_decs(a, b) {
  var total;
  total = a + b;
  return total;
}

// Function Expression
var jumlahDuaBilangan_exps = function (a, b) {
  var total;
  total = a + b;
  return total;
}

// struktur function
// - keyword function : function
// - nama function(opsional) : jumlahDuaBilangan_decs & jumlahDuaBilangan_exps
// - parameter(opsional) : a, b
// - function body : 
// var total
// total = a + b;
// return total;
// - nilai kembalian / return value(opsional) : return total;

// memanggil / mejalankan function
console.log(jumlahDuaBilangan_decs(5, 20));
console.log(jumlahDuaBilangan_exps(10, 20));
// jika menggunakan function kita bisa menggunakannya berulang kali
console.log(jumlahDuaBilangan_decs(100, 150.8));
console.log(jumlahDuaBilangan_exps(20.7, 30.5));