// cara kerja function
// saat kita bekerja dengan function biasanya kita akan memiliki sebuah input atau sebuah nilai yang akan kita masukan kedalam sebuah function dan function tadi akan melakukan sesuatu kepada inputan tadi

// function yang baik hanya mengerjakan satu hal saja
// karna itu akan mempermudah kita saat mengetahui dan menelusuri jika ada kesalahan

// function
// - blok kode yang dibuat untuk melakukan tugas spesifik
// - dapat dipanggil berulang kali
// - memudahkan penelusuran
// - reusability
// contoh kasus
// dua buah kubus, yaitu kubus a dan b
// lalu kita ingin membuat program untuk menghitung volume kubus ini
// dalam matematik bisa dihitung sbg:
// 1. ketahui sisi masing -masing kubus                 8               3
// 2. Hitung volume masing - masing kubus        8 * 8 * 8 = 512  3 * 3 * 3 = 27
// 3. Jumlahkan hasilnya                               512      +      27
// 4. kembalikan nilai jawabannya                              539

// jika kita menggunakan javascript itu akan menjadi seperti ini:
// var a = 10;
// var b = 15;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;
// total = volumeA + volumeB;
// console.log(total);
// jika tidak menggunakan function jika kita punya kubus baru kita harus membuat semua itu berulang - ulang
// tapi jika kita menggunakan function kita bisa menggunakannya berulang kali

// kubus 1
var a = 10;
// kubus 2
var b = 15;
// kubus 3
var c = 20;
// kubus 4
var d = 50;
// berikan keyword function. lalu berikan nama yang mendeskripsikan function itu. setelah nama berikan (). didalam () berikan parameter (params), n/t:optional.
function jumlahDuaKubus(a, b) {
  var jumlahA = a * a * a;
  var jumlahB = b * b * b;
  var total = jumlahA + jumlahB;
  // sebuah fungsi biasanya mengembalikan sebuah nilai dengan return untuk memberi tau javascript bahwa kita sudah selesai dan inilah hasilnya, return juga bisa menghentikan sebuah function
  return total;
}
// jumlah kubus 1 dan 2
console.log(jumlahDuaKubus(a, b));
// jumlah kubus 3 dan 4
console.log(jumlahDuaKubus(c, d));