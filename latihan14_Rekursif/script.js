// Rekursif adalah sebuah fungsi yang memanggil dirinya sendiri
// misal kita memiliki sebuah input untuk sebuah function lalu didalam function itu memanggil dirinya sendiri, dengan harapan sampai pemanggilannya berhenti, tapi ini akan menjadikannya unlimited looping dan tidak akan berhenti
// karna itu di fungsi rekursif ini pemanggilannya harus behenti dan mengembalikan sebuah nilai
// contoh
// function tes() {
//   return tes();
// }
// tes();
// fungsi tes akan menghasilkan
// Uncaught RangeError: Maximum call stack size exceeded
// karna terlalu banyak pemanggilan fungsi rekursif

// misal kita ingin menampilkan 1 - 10 ke console kita bisa menggunakan for looping seperti ini
for (let i = 1; i <= 10; i++) {
  console.log(`for loop ${i}`);
}
// tapi kita juga bisa menggunakan fungsi rekursif untuk menampilkannya
// function angka(n) {
//   console.log(n);
//   return angka(n-1);
// }
// angka(10);
// tapi jika fungsi itu dipanggil maka itu akan dipanggil terus menerus bahkan sampai angka minus(-)
// karna itu kita harus buat kondisi berhentinya / base case(kondisi akhir dari rekursif yang menghasilkan nilai)
function angka(n) {
  if (n === 11) {
    return;
  }
  console.log(`fungsi rekursif ${n}`);
  angka(n+1);
}

angka(1);

// contoh lainnya yaitu factorial
function factorial(n) {
  if(n === 0) return 1;
  return n * factorial(n-1);
}
console.log(`nilai factorial ${factorial(5)}`);

// Implementasi Rekursif
// - untuk menggantikan looping
// - membuat fibonacci
// - melakukan pencarian dan penelusuran pada strutur data list dan tree
// - bisa digunakan untuk bahasa pemograman yang tidak memiliki konsep perulangan / looping, seperti : Haskell, Erlang, Prolog, dll.
// dll