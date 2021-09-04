// soal 1
// 1. Judul : Function Penghitung Jumlah Kata
// Buatlah sebuah function dengan nama jumlah_kata() yang menerima sebuah kalimat (string), dan mengembalikan nilai jumlah kata dalam kalimat tersebut.
// Contoh

// var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
// var kalimat_2 = "Saya Iqbal"
// jumlah_kata(kalimat_1) // 6
// jumlah_kata(kalimat_2) // 2

function jumlahKata(num){
  var pisah = num.split(' ').filter((kata) => {if (kata !== ' ')
  return kata;
  })
 return pisah.length;
}

var kalimat = "Nama saya Ilham Maulana Sugianto";
var hasil = jumlahKata(kalimat)
console.log(kalimat + ' jumlah huruf' + ' = ' + hasil + '\n')




