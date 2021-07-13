// filter dan find : berfungsi untuk mencari elemen pada array

var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// filter
// berfungsi untuk mencari nilai pada array dan mengembalikannya dalam bentuk array
// misal kita ingin mencari apakah ada nilai 5 di array angka dengan filter
var angka2 = angka.filter(function(e) {
  return e == 5; // jika ada nilai 5 didalam array maka function ini akan mengembalikan array dengan nilai 5
});
console.log(angka2);

// lalu jika kita ingin mencari suatu nilai tapi ternyata nilai itu tidak ada didalam array maka function akan mengembalikan array kosong
var angka3 = angka.filter(function(e) {
  return e == 10; // karna didalam array angka tidak ada 10 maka function akan mengembalikan array kosong
});
console.log(angka3);

// lalu kita juga bisa mencari banyak nilai, seperti jika kita ingin mencari nilai yang lebih besar dari 5
var angka4 = angka.filter(function(e) {
  return e > 5; // semua nilai yang lebih besar dari 5(dimulai dari 6) akan dikembalikan oleh function
});
console.log(angka4.join(' - '));


// find
// akan mengembalikan satu nilai saja
var angka5 = angka.find(function(e) {
  return e > 5; // satu nilai yang lebih besar dari 5 akan diambil dan dikembalikan oleh function
});
console.log(angka5); // ingat find tidak mengembalikan array jadi tidak bisa menggunakan method join

// untuk melihat lebih banyak method pada javascript kalian bisa lihat di link berikut
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

