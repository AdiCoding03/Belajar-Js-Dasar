// Manipulasi array
// - Menambah elemen pada array
// - Menghapus elemen pada array
// - Menampilkan seluruh isi array

var arr = ['halo', 1, true];
// untuk menampilkan semua array
console.log(arr);
// misal kita ingin mengambil array halo
console.log(arr[0]);

// menambakan isi array
arr[3] = 'dimas';
arr[4] = false;
// dengan cara ini kalian harus tau ada berapa indexnya, karna jika ada yang terlewat akan otomatis ditambahkan
arr[6] = 'pass';
console.log(arr);
// index ke 5 akan di isi dengan empty / kosong / undefined

// mengahapus index array
arr[3] = undefined;
console.log(arr);

// menampilkan array dengan benar dan bukan dengan object seperti tadi
var arr_loop = ['dimas', 'adi', 'putra', 1, 2, 3, true, false];
// kita bisa gunakan for loop untuk menampilkannya
for (let i = 0; i < arr_loop.length; i++) {
  const index = arr_loop[i];
  console.log(index);
}

// kita sudah bisa memanipulasi array meskipun caranya belum benar
// seharusnya kita bisa gunakan method dari array
// - length : untuk menghitung jumlah array
// - join : untuk menggabungkan seluruh isi array dan menjadikannya string
console.log(arr_loop.join());
// akan otomatis ditampilkan sebagai string dan sudah dipisahkan dengan koma(,)
// jika kalian ingin operator pemisahnya diubah
// misal menjadi -
console.log(arr_loop.join(' - '));
// - push, pop, shift, unshift

// push : untuk menambah elemen baru di akhir array
// nama_array.push(elemen);
arr_loop.push('jaki');
console.log(arr_loop.join(' - '));
// push juga bisa langsung menambahkan beberapa elemen
arr_loop.push('risky', 'mail', 'ucup');
console.log(arr_loop.join(' - '));
// pop : untuk menghapus elemen terakhir dari array
// nama_array.pop()
arr_loop.pop();
arr_loop.pop();
console.log(arr_loop.join(' - '));

// unshift dan shift
// method ini hampir sama seperti push dan pop hanya saja ini bekerja untuk elemen pertama / diawal array
// nama_array.unshift(elemen);
arr_loop.unshift('putra');
console.log(arr_loop.join(' - '));
// nama_array.shift();
arr_loop.shift();
console.log(arr_loop.join(' - '));