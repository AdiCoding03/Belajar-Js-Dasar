// mencetak bintang( * ) secara horizontal
// let s = '';
// for (let i = 0; i < 5; i++) {
//   s += '*';
// }
// console.log(s);

// mencetak bintang(*) secara vertikal
// let s = '';
// for (let i = 0; i < 5; i++) {
//   s += '*';
//   s += '\n';
// }
// console.log(s);

// mencetak beberapa bintang(*) horizontal secara vertikal
// let s = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     s += '*';
//   }
//   s += '\n';
// }
// console.log(s);

// mencetak bintang(*) secara berurutan darikecil-besar / segitiga siku - siku
// let s = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     s += '*';
//   }
//   s += '\n';
// }
// console.log(s);

// mencetak bintang(*) secara berurutan daribesar-kecil / segitiga siku - siku terbalik secara vertikal
// let s = '';
// for (let i = 5; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

// mencetak bintang(*) secara berurutan daribesar-kecil / segitiga siku - siku terbalik secara vertikal dan horizontal
// let s = '';
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= i; j++) {
//         s += ' ';
//     }
//     for (let k = 5; k > i; k--) {
//         s += "*";
//     }
//     s += '\n';
// }
// console.log(s);

// mencetak setengah belah ketupat
// let s = '';
// let b = 5;
// for (let i = 0; i < b; i++) {
//     for (let j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// for (let i = b; i > 0; i--) {
//     for (let j = 1; j < i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

//  membuat segitiga sama kaki
// let s = '';
// for (let i = 0; i < 10; i += 2) {
//     for (let j = 10; j > i; j -= 2) {
//         s += ' ';
//     }
//     for (let j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);

//  membuat segitiga sama kaki terbalik secara vertikal
// let s = '';
// for (let i = 10; i >= 0; i -= 2) {
//     for (let j = 0; j <= i; j += 2) {
//         s += '$';
//     }
//     for (let j = 0; j <= i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);