var penumpang = [];

// tambah penumpang
var tambahPenumpang = function(namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang diawal array
    penumpang.push(namaPenumpang);
    // return isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined && penumpang[i] == namaPenumpang ) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // return isi array & keluar dari function
        return penumpang;
      } /* jika sudah ada nama yang sama */ else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahan
        console.log(`nama penumpang ${namaPenumpang} sudah ada`);
        // return isi array dan keluar dari function
        return penumpang;
      } else if(i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // return isi array & keluar dari function
        return penumpang;
      }
      
    }
  }
}

// hapus penumpang
var hapusPenumpang = function(namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan
    console.log('angkot kosong, dan tidak mungkin ada penumpang turun');
    // return isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // ubah nama penumpang menjadi undefined
        penumpang[i] = undefined;
        // return isi array & keluar dari function
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // tampilkan pesan kesalahan
        console.log(`nama Penumpang ${namaPenumpang} tidak ada`);
        // return isi penumpang & keluar dari function
        return penumpang;
      }
    }
  }
}