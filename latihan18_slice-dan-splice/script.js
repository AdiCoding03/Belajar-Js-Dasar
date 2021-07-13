// slice : dalam bahasa inggris artinya mengiris, jadi ini digunakan untuk mengambil beberapa elemen dalam sebuah array dan menjadikannya array baru
// splice : dalam bahasa inggris artinya menyambung, jadi kita bisa menyisipkan sebuah elemen di tengah - tengah dengan splice


// Splice
var arr = ['Dimas', 'Adi', 'Putra'];
// splice(indexAwal, mauDihapusBrpa, ElemenBaru1, elemenBaru2, .....)
arr.splice(2, 0, 'Jaki', 'Rizky');
console.log(arr.join(' - '));

// contoh lain
var arr1 = ['ucup', 'cecep', 'udin'];
arr1.splice(1, 2, 'fitri', 'nurul');
console.log(arr1.join(' - '));


// Splice
var arr2 = ['nana', 'nurdin', 'entong', 'ecep', 'dia'];
// slice(awal, akhir)
// misal kita akan mengambil elemen 'entong' dan 'ecep'
// karna entong memiliki index 2 dan ecep 3 jadi kita mulai dari index 2 dan diakhiri index 4
var arr3 = arr2.slice(2, 4);
console.log(`array 2 / hasil slice : ${arr3.join(' - ')}`);
console.log(`array 3 / murni : ${arr2.join(' - ')}`);