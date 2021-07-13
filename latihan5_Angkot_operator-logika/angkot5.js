let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log(`Angkot no.${noAngkot} beroperasi dengan baik`);
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log(`Angkot no.${noAngkot} sedang lembur`);
  } else {
    console.log(`Angkot no.${noAngkot} sedang tidak beroperasi`);
  }

}