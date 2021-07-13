// sort : untuk mengurutkan sebuah array
var angka = [5, 2, 4, 3, 8, 1, 6];
console.log(`sebelum sort : ${angka.join(' - ')}`);
angka.sort();
console.log(`angka berurutan : ${angka.join(' - ')}`);

// tapi berhati - hatilah saat menambahkan angka lebih dari 9, misal : 10, 11, ..., 20, dst
var angka1 = [1, 2, 4, 6, 3, 8, 10, 13, 20];
angka1.sort();
console.log(`angka berurutan diatas 10 : ${angka1.join(' - ')}`);

// kita bisa mengatasinya dengan cara berikut
angka1.sort(function(a, b) {
  return a - b;
});
console.log(`angka berurutan dengan solusi : ${angka1.join(' - ')}`);