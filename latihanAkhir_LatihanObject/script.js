// pengelolaan angkot
// - sopir
// - trayek
// - kas
// - penumpang
  // - penumpang naik
  // - penumpang turun

function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function(namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  }

  this.penumpangTurun = function(namaPenumpang, bayar) {
    if(this.penumpang.length === 0) {
      console.log('angkot masih kosong');
      return false;
    }

    for (let i = 0; i < penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;

        return penumpang;
      }
      
    }
  }
}

var angkot1 = new Angkot('Dimas', ['Bekasi', 'Ujung Harapan'], [], 0);
var angkot2 = new Angkot('Jaki', ['Sektor', 'VGH'], [], 0);