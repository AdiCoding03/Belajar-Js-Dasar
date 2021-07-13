// Array
// array adalah tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau variable), yang tiap - tiap elemennya memiliki index.
// https://en.wikipedia.org/wiki/Array_data_type

// array adalah variable yang lebih sakti karena bisa menampung lebih dari satu nilai
// Sandhika Galih - WPU

// misal kita buat variable hari
// var hari = 'senin';
// lalu kita ingin membuat juga var hari dengan hari selasa
// var hari = 'selasa';
// tapi itu akan membuat var hari = 'senin'; hilang karna ditimpa karna kita memberikan nama variable yang sama
// bisa saja kita buat dengan nama variable yang berbeda
// var hari1 = 'senin';
// var hari2 = 'selasa';
// var hari3 = 'rabu';
// .
// .
// .
// dst
// lalu bagaimana jika kita ingin menulis daftar siswa di sebuah sekolah
// akan ada banyak variable yang kita buat dan itu akan menyusahkan kita untuk mengelolanya
// karna itu kita buat menggunakan array
var hari = ['senin', 'selasa', 'rabu' /* dst */ ];
// ini akan memudahkan kita untuk mengelolanya dan performa web kita pun akan lebih cepat

// kenapa array
// - Mempermudah pengelolaan nilai / value / data
  // - penelurusan dan pencarian
// - Manajemen memori

// definisi array
// - Variable jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama
// - Kumpulan pasangan key dan nilai / key and value pair
// - Key adalah index pada array dengan tipe data integer yang dimulai dari 0
// - Array pada javascript bertipe object
// - Array pada javascript memiliki fungsi / method length untuk menghitung jumlah elemen di dalamnya
// - Elemen pada array boleh memiliki tipe data yang berbeda

// Key and value pair
// misal kita buat array nama - nama binatang
var zoo = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];
// atau 
// var zoo[]; -> untuk memberi tau javascript bahwa kita membuat array
// zoo = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi']; -> untuk memasukan nilai ke array

// untuk memanggil array kita bisa menggunakan
// console.log(zoo[index]);
// melihat semua elemen didalam array
console.log(zoo);
// melihat elemen dengan index ke 4
console.log(zoo[4]);

// membuktikan bahwa array adalah object
console.log(typeof(zoo));

// karna array adalah object jadi dia memiliki fungsi yang disebut dengan method
// salah satunya yaitu method .length
console.log(zoo.length);
// n/t : jumlah array tidak sama dengan index array

// elemen pada array boleh beda tipe
var day = ['senin', 'selasa', 'rabu'];
var stud = ['dimas', 'dzaki', 'rizky'];
var numb = [10, 123, 2004];
var myArr = ['teks', 2, false];
var myFunc = function() {
  console.log('helo world');
}
var myArr2 = ['teks', 2, false, myFunc];
// kita juga bisa menyimpan array didalam array
var myArr3 = ['teks', 2, false, myFunc, [4,5,6]];
// tampilkan angka 5 dari array myArr3
console.log(myArr3[4][1]);


