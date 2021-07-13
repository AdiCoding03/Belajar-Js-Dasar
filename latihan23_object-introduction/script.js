// object hampir sama seperti array, karna array memiliki type object
// di javascript tidak ada type array, yang ada hanya type object
// array adalah kumpulan nilai, yang memiliki index.
// https://en.wikipedia.org/wiki/Array_data_type

// object juga sama yaitu kumpulan nilai, tapi object tidak memiliki index karna object menggunakan nama
// object adalah kumpulan nilai, yang memiliki nama
// https://www.w3schools.com/js/js_object_definition.asp

// jika array adalah variable yang lebih sakti, maka object adalah array yang lebih sakti

// ada yang bilang juga
// "In Javascript, object are king. If you understand object, you understand javascript".
// "di Javascript, object adalah raja. Jika kamu memahami object, maka kamu memahami javascript"
// kenapa? karna didalam javascript itu berisi object - object

// di bahasa pemograman lain juga memiliki object, yang meskipun namanya berbeda tapi konsepnya sama
// - PHP          : Associative Array
// - Python       : Dictionaries
// - C            : Hash Tables
// - Java         : Hash Maps
// - Ruby & Perl  : Hashes

// Kenapa Object?
// Misal kita ingin membuat beberapa variable
// var siswa = 'Dimas'; // untuk menampung nama siswa
// var umurSiswa = 18; // untuk menampung umur siswa
// var lulus = true // untuk menampung apakah siswa lulus / tidak
// var nilaiName = [60, 60, 60, 80];
// function mathName(nilaiName) {
//   var total = 0;
//   for (let i = 0; i < nilaiName.length; i++) {
//     total += nilaiName[i];
//   }
//   return total / nilaiName.length;
// }
// lalu bagaimana jika kita ingin membuat banyak data siswa?
// kita bisa saja menggunakan array
// var siswa = ['Dimas', 18, true, [60, 60, 60, 80]];
// meskipun javascript tidak tau bahwa [namaSiswa, umurSiswa, lulus/tidak, nilaiName], karna didalam array kita menggunakan index
// kita bisa membuat var baru untuk menambah siswa lain
// lalu kita bisa membuat function disini untuk menghitung nilai name siswa

// function mathName(nilaiName) {
//   var total = 0;
//   for (let i = 0; i < nilaiName.length; i++) {
//     total += nilaiName[i];
//   }
//   return total / nilaiName.length;
// }


// meskipun menggunakan array bisa menjadi lebih efektif tapi kita tetap harus mengulang" lagi
// karna itu kita membutuhkan object
var siswa = {
  // 'key' : 'value';
  nama : 'Dimas',
  umur : 18,
  lulus : true,
  nilaiName : [60, 60, 60, 80],
  mathName : function mathName() {
      var total = 0;
      var mathName = this.nilaiName;
      for (let i = 0; i < mathName.length; i++) {
        total += mathName[i];
      }
      return total / mathName.length;
    }
}
// lalu dengan menggunakan notasi titik(.) kita bisa memanggil function itu
// namaObject.namaProperti
siswa.mathName();

// istilah - istilah dalam object
var orang = {
  nama : 'adi',                 // 
  umur : '17',                  // ini disebut Properti
  pekerjaan : 'IT Engineering', //
  skill : ['HTML', 'CSS', 'JavaScript'],
  alamat : {
    jalan : 'Gg. Rose 1, Rawa Silam 3',
    kota : 'Bekasi',
    provinsi : 'Jawa Barat'
  },
  sapa : function () {
    return `Hi, nama saya ${this.nama}, usia saya ${this.umur} tahun dan saya seorang ${this.pekerjaan}`;
  }
}
// kita juga bisa memanggil Object dengan kurung siku([])
// namaObject["namaProperty"];
orang["nama"];
// tapi kita akan lebih sering menggunakan titik(.), supaya lebih mudah untuk membedakan antara array dan object
orang.skill[1]; // mengambil index 1 dari array skill didalam object
orang.alamat.kota; // mengambil Property kota dari object alamat yang ada didalam object orang
orang["alamat"]["jalan"]; // menggunakan kurung siku[]
orang.alamat["provinsi"]; // menggunakan campuran

