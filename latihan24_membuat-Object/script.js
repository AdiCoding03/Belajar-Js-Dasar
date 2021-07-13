// Ada beberapa cara untuk membuat object, yaitu
// - Object Literal : yang kita pakai di latihan sebelumnya
// - Function Declaration
// - Constructor Function (keyword new)
// - Object.create()

// disini kita hanya akan menggunakan 3 cara teratas dulu

// Object Literal
var siswa1 = {
  // key : 'value'
  nama : 'Dimas',
  // jika lebih dari satu pisahkan dengan koma (,)
  umur : 18,
  email : 'adputr57@gmail.com',
  jurusan : 'tkj'
}
// dengan begini kita sudah membuat object mahasiswa dengan 4 property
// lalu misal kita ingin buat untuk siswa lain
var siswa2 = {
  // key : 'value'
  nama : 'Adi',
  // jika lebih dari satu pisahkan dengan koma (,)
  umur : 17,
  email : 'adiputra123@gmail.com',
  jurusan : 'rpl'
}
// tapi jika kita ingin membuat object berikatnya dengan nama property yang sama dan hanya valuenya yg berbeda
// kita bisa menggunakan Function declaration
// Function Declaration
function objectSiswa(nama, umur, email, jurusan) {
  var siswa = {};
  siswa.nama = nama;
  siswa.umur = umur;
  siswa.email = email;
  siswa.jurusan = jurusan;
  return siswa;
};
// lalu kita bisa mengisinya
var siswa3 = objectSiswa('jaki', 17, 'jaki@gmail.com', 'tkj');
// dengan begini kita bisa buat siswa berikutnya
var siswa4 = objectSiswa('putra', 16, 'adputr.111@gmail.com', 'TI');

// ada lagi yang lebih efektif yaitu Function Constructor
// Function Constructor
// untuk membedakan mana yang function declaration dan mana yang function constructor sebaiknya gunakan Huruf kapital untuk nama functionnya
function Siswa(nama, umur, email, jurusan) {
  // kita tidak perlu lagi membuat variable untuk menyimpan objectnya, jadi kita bisa langsung menggunakan keyword this
  this.nama = nama;
  this.umur = umur;
  this.email = email;
  this.jurusan = jurusan;
  // kita cukup menulis itu saja
}
// untuk memanggilnya kita gunakan keyword new
// var namaObject = new namaFunction(nama, umur, email, jurusan);
var siswa5 = new Siswa('Rizky', 18, 'rizky@gmail.com', 'tkj');
// n/t : jangan lupa gunakan keyword new
// jika kita tidak menggunakan keyword new maka yang dikembalikan adalah undefined karna didalam function tidak me-return nilai apapun
var siswa6 = Siswa('nana', 20, 'nana@gmail.com', 'perbankan');