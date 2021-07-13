// Scope / lingkup variabel
// istilahnya bagamana sebuah variabel dapat diakses dalam program

// dalam bahasa program ada dua jenis scope
// - block scope
// - function scope

// block scope
// block scope digunakan dalam bahasa C atau Java
// contoh block dalam bahasa C
// int i = 2;
// if( i % 2 == 0) {
//   bool genap = true;
// }
// if(genap) {
//   printf("genap!");
// }
// penjelasan :
  // pertama buat integer i dengan value 2 lalu di cek dengan pengkodisian if, jika int i modulus(sisa bagi) 2 = 0 lalu buat variabel genap dengan type data boolean dan bernilai true, setelah itu dicek lagi jika genap bernilai true maka tampilkan "genap!" ke layar
  // tapi disini hasilnya error
  // karna variable yang dibuat di dalam block scope{} hanya bisa digunakan didalam scope itu saja
// lalu jika program tadi kita buat dengan javascript
var i = 2;
if (i % 2 == 0) {
  var genap = true;
}
if (genap) {
  console.log('genap!');
}
// jika dengan javascript ini akan tampil "genap!" di console
// karna javascript tidak mengandung block scope
// javascript mengandung function scope

// lalu misal kita buat
var a = 1;
console.log(a);
// ini artinya var a disebut global scope / window scope karna var a di declarasikan di bagian terluar / di window
// lalu misal kita buat sebuah function
function tes() {
  var b = 2;
  // jika kita panggil b disini maka akan tampil
  console.log(b);
  // didalam function kita juga bisa memanggil variable global
  console.log(a);
}
// kita panggil functionnya
tes();
// lalu kita panggil variabel b tadi

// console.log(b);

// tapi hasilnya
// Uncaught ReferenceError: b is not defined
// b tidak ditemukan, jadi program ini tidak bisa mengenali b

// kesimpulan : var didalam function tidak bisa dipanggil keluar / digunakan di global, tapi var global bisa digunakan di dalam function

// name conflict
// yaitu dimana kita membuat dua variable dengan nama yang sama tapi dalam scope yang berbeda maka variable sebelumnya tidak akan di timpa, contoh
var c = 5;

console.log(`nilai c sebelum function adalah ${c}`);

function coba() {
  // disini kita declarasikan lagi function c
  var c = 10;
  console.log(`nilai c didalam function adalah ${c}`);
  // kita tetap bisa memanggil var di scope global dengan window.nama_var
  console.log(`nilai window.c didalam function adalah ${window.c}`);
  // jika kita tidak menggunakan var didalam function maka itu akan menimpa yang ada di global scope
  c = 20;
  console.log(`setelah c diubah di function adalah ${c}`)
}
// kita panggil function coba
coba();

// kita lihat disini lagi
console.log(`nilai c adalah setelah function ${c}`);
// lalu kita akan menimpa variable c
var c = 20;
console.log(`nilai c setelah ditimpa di global scope adalah ${c}`);