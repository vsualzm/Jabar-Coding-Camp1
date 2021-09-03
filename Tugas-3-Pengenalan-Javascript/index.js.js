// tugas javascript dasar hari ke 3

// soal 1 
// cara menggabungkan ke 2 variabel menggnakan variabel let

// jawaban 
let awal = "ilham suka sekali javascript ";
let kedua = "belajar javascript itu keren";
satu = awal.substring(0,10);
dua = kedua.substring(0,7);

besar = kedua.substring(8,18);
besar1 = besar.toUpperCase();
console.log(satu + ' ' + dua + ' ' + besar1);


// soal 2 
// merubah variable string menjadi interger
let angka1 = "20";
let angka2 = "30";
let angka3 = "50";

/// cara konversi dari string ke interger 

uAngka1 = parseInt(angka1);
uAngka2 = parseInt(angka2);
uAngka3 = parseInt(angka3);

//pennjumlahan 
hasil1 = uAngka1 + uAngka2 * uAngka3 - uAngka2;
hasil2 = uAngka3 + (uAngka1 * uAngka3 ) - uAngka1;
hasil3 = (uAngka3 * uAngka1) / uAngka1 + uAngka1

console.log('test 1: 20 + 30 x 50 - 30 = ' + hasil1 );
console.log('test 2: 50 + ( 20 x 50) - 1 = ' + hasil2);
console.log('test 3: (20 x 1) / 20 + 20 = ' + hasil3);


//soal 3
// menyebutkan setiap kata

let javascript = "Ilham menyebutnya Javascript Keren Sekali ";

let kataPertama = javascript.substring(0,5);
let kataKedua = javascript.substring(6,17);
let kataKetiga = javascript.substring(18,28);
let kataKeempat = javascript.substring(29,34);
let kataKelima = javascript.substring(35,44);

// memanggil

console.log('Kata Pertama:' + kataPertama );
console.log('Kata Kedua  :' + kataKedua );
console.log('Kata Ketiga :' + kataKetiga );
console.log('Kata Keempat:' + kataKeempat );
console.log('Kata Kelima :' + kataKelima );
