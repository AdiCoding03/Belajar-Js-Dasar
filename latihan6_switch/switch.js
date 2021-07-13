let item = prompt('Masukan nama makanan / minuman : (cth : nasi, daging, susu, hamburger, softdrink)');

switch (item) {
  case 'nasi':
  case 'daging':
  case 'susu':
    alert('makanan / minuman sehat!');
    break;

  case 'hamburger':
  case 'softdrink':
    alert('makanan / minuman tidak sehat!');
    break;

  default:
    alert('anda memasukan makanan / minuman yang salah');
    break;
}