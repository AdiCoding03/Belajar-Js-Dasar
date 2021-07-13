// Refactoring adalah sebuah proses mengubah kode kita menjadi lebih 'baik' lagi tanpa mengubah fungsionalitas

// Kenapa harus melakukan Refactoring
// - Readability : agar kode mudah dibaca oleh kita dan orang lain, karna mungkin nanti kita akan melakukan project tim
// - DRY (Do not Repeat Yourself) : agar tidak mengulang program yang sama
// - Tetability : agar mudah saat dilakukan pengujian
// - Perfomance : untuk meningkatkan performance menjadi lebih baik
// - Maintainability : agar nanti program kita menjadi lebih mudah untuk di kembangkan

// function jumlahDuaKubus(a, b) {
  // kita bisa saja menaruh a * a * a dan b * b * b secara langsung didalam total
  // var jumlahA = a * a * a;
  // var jumlahB = b * b * b;
  // var total = jumlahA + jumlahB;
  // var total = a * a * a + b * b * b;
  // karna didalam javascript aritmatika kali(*) akan dihitung lebih dulu
  // dan ada yang lebih efisien lagi yaitu kita bisa saja menghilangkan var total dan menaruh a * a * a + b * b * b langsung didalam return
  // return a * a * a + b * b * b;
// }
// jika dirapihkan akan menjadi seperti ini
function jumlahDuaKubus(a, b) {
  return a * a * a + b * b * b;
}

console.log(jumlahDuaKubus(10, 20));
console.log(jumlahDuaKubus(20, 30));