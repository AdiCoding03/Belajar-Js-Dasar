//  Algoritma
// menangkap pilihan player
// membangkitkan function bilangan random untuk computer
// menangkap pilihan comp
// menentukan rules
// menampilkan hasil
// akhir Algoritma

let loop = true;
while (loop) {
   // menangkap pilihan player
   let player = prompt('Pilih : gajah / orang / semut');

   // mebangkitkan func bil.rand untuk computer
   let comp = Math.round(Math.random() * 9);

   // menangkap pilihan comp
   if (comp < 3) {
      comp = 'gajah';
   } else if (comp >= 3 && comp < 6) {
      comp = 'orang';
   } else if (comp >= 6) {
      comp = 'semut';
   }

   // menentukan rules
   let hasil;
   if (player == comp) {
      hasil = 'Seri';
   } else if (player == 'gajah') {
      hasil = (comp = 'orang') ? 'Menang' : 'Kalah';
   } else if (player == 'orang') {
      hasil = (comp = 'semut') ? 'Menang' : 'Kalah';
   } else if (player == 'semut') {
      hasil = (comp = 'gajah') ? 'Menang' : 'Kalah';
   } else {
      player = 'Tidak Dikenal';
      hasil = undefined;
   }
   console.log(comp);
   alert(`Pilihan kamu ${player} dan pilihan computer ${comp} maka hasilnya : ${hasil}.`);

   loop = confirm('Lagi?');
}

alert('Terimakasih sudah bermain.');