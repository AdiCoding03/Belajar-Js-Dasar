// di latihan sebelumnya kita sudah tau beberapa cara untuk membuat object
// - Object Literal
// - Function Declaration
// - Constructor Function (keyword new)

// jadi untuk bisa memahami konsep this kita harus memahami cara membuat object dengan berbagai cara seperti tadi
// karna pada saat kita membuat dan memanggil object terutama dengan menggunakan function kita akan berada dalam sebuah context / sebuah keadaan yang berbeda tergantung dari cara kita membuat dan memanggil objectnya

// contoh pembuatan object

// cara 1 -> function declaration
// function obj() {
//   console.log('halo');
// }
// obj();

// cara 2 -> object literal
// var obj = {};
// obj.halo = function halo() {
//   console.log('halo');
// }
// obj.halo();

// cara 3 -> function constructor
// function Obj() {
//   console.log('halo');
// }
// new Obj();

// meskipun 3 cara itu hasilnya sama tapi contextnya berbeda

// Konsep This
// this adalah sebuah keyword special yang secara otomatis didefinisikan dalam setiap function
// jadi setiap kita membuat sebuah function / object akan ada keyword this yang didefinisikan
// contohnya kita coba panggil this meskipun belum membuat function / object apapun
// console.log(this);
// ternyata this itu mengembalikan suatu nilai yaitu window / object global
// jadi kita juga bisa menulisnya seperti ini
// console.log(window);
// dan hasilnya pun sama

// contoh lain
// var a = 10;
// console.log(a);
// console.log(this.a);
// console.log(window.a);
// hasilnya sama
// jadi setiap kita membuat variable di scope global maka variable akan menjadi property global / property dari window

// lalu bagaimana jika kita menjalankan this pada tiap cara membuat obj diatas

// // cara 1
// function obj() {
//   // jika kita menjalan this didalam function ini
//   console.log(this);
//   // maka yang ditampilkan adalah window
//   // karna property dan method itu adalah variable yang ada didalam object
//   // dan scope global adalah obj window
//   // lalu saat kita membuat var a diatas itu artinya kita membuat property window dengan nilai 10
//   console.log('halo');
// }
// // lalu jika kita jalankan function tadi disini
// obj();
// // itu sama dengan
// window.obj();
// // karna obj masuk ke scope global
// // kita juga bisa menggantinya dengan this
// this.obj();
// // jadi ketika kita membuat function decalration this adalah global / window


// // cara 2
// var obj = {nama : 'dimas', umur : 17};
// // misal kita tambahkan property di objnya

// obj.halo = function halo() {
  //   // saat kita tampilkan this
  //   console.log(this);
  //   // maka this akan mengembalikan object itu sendiri
  //   console.log('halo');
  // }
  // obj.halo();
  // // jadi, jika menggunakan object literal this mengembalikan object itu sendiri
  
  
  // cara 3
  function Obj() {
    // lalu kita panggil this
    console.log(this);
    console.log('halo');
  }
  // jika langsung halo tanpa keyword new
  Obj();
  // maka this akan mengembalikan object window
  // tapi jika kita menggunakan keyword new
  new Obj();
  // maka yang dikembalikan adalah object
  // tapi bukan function Obj(), melainkan object yang baru dibuat oleh keyword new
  // karna new berfungsi untuk membuat obj yang sama secara instan
  