// forEach dan map
// digunakan untuk looping pada array, tapi lebih powerfull dari for biasa

var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// jika kita gunakan for
for (let i = 0; i < angka.length; i++) {
  console.log(`dengan for ${angka[i]}`);
}

// lalu jika dengan forEach
angka.forEach(function (i) {
  console.log(`dengan forEach ${i}`);
});

// lalu bagaimana jika kita ingin menampilkan indexnya dan isinya??
// kita bisa berikan 2 parameter
var nama = ['dimas', 'adi', 'putra'];
// parameter e akan mengacu ke elemennya dan paramenter i akan mengacu ke indexnya
nama.forEach(function (e, i) {
  console.log(`Siswa ke-${i+1} adalah ${e}`);
});

// map
var number = [1, 2, 3, 4, 5, 6, 7, 8];
// contoh dengan forEach
number.forEach(function (e) {
  console.log(`dengan forEach ${e}`);
});
// lalu jika forEach-nya kita ganti dengan map
number.map(function (e) {
  console.log(`dengan map ${e}`);
}); // hasilnya akan sama saja
// tapi jika kita menulisnya seperti ini
var numberBaru = number.map(function (e) {
  return e * 2; //artinya seluruh elemen akan saya kalikan 2 dan akan saya kembalikan nilainya
});
// seharusnya saat kita console.log maka akan tampil 2, 4, 6, 8, dst
console.log(`dengan map ${numberBaru.join(', ')}`);

// sedangkan untuk forEach
var numberBaru = number.forEach(function (e) {
  return e * 2;
});
console.log(`dengan forEach ${numberBaru.join(' - ')}`);

// akan menghasilkan
// Cannot read property 'join' of undefined
// kenapa??
// karna forEach tidak mengembalikan array