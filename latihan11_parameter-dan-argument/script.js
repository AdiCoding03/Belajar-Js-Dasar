// Parameter adalah variabel yang ditulis didalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang dikirimkan saat function dipanggil
// argument adalah nilai yang dikirimkan ke parameter saat function dipanggil

// jadi parameter itu saat function dibuat dan argument saat function di panggil.
// function tambah(parameter) {
//   return a + b;
// }
// var coba = tambah(argument);
function tambah(a, b) {
  return a + b;
}
console.log(tambah(10, 30));
// Argument bisa kita isi dengan banyak cara
// memasukannya kedalam variabel terlebih dahulu
var c = 20;
var d = 30;
console.log(tambah(c, d));
// bisa juga menggunakan inputan dari user
var e = prompt('Masukan nilai e: ');
var f = prompt('Masukan nilai f: ');
console.log(tambah(e, f));
// tapi disini akan menghasilkan string
// karna itu kita harus mengubahnya menjadi integer terlebih dulu
var g = parseInt(prompt('Masukan nilai g: '));
var h = parseInt(prompt('Masukan nilai h: '));
// parseInt() adalah salah satu built-in function yang berfungsi untuk mengubah apapun yang input menjadi integer
console.log(tambah(g, h));
