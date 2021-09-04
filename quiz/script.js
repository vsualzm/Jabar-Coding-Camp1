// soal 1

function jumlahKata(num){
  var pisah = num.split(' ').filter((kata) => {if (kata !== ' ')
  return kata;
  })
 return pisah.length;
}

var kalimat = "Nama saya Ilham Maulana Sugianto";
var hasil = jumlahKata(kalimat)
console.log(kalimat + ' jumlah huruf' + ' = ' + hasil + '\n')



// soal 2 

var tanggal = 15;
var bulan = 6;
var tahun = 2021;

function tanggalBesok(tanggal, bulan, tahun){
    var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Desember"];
    var pilihBulan = months[bulan-1];
    var target = pilihBulan + '/' + tanggal.toString() + '/' + tahun.toString();
    var s = new Date(target);
    s.setDate(s.getDate() +1);
    return `${s.getDate()} ${months[s.getMonth()]} ${(s.getFullYear())}`;
}
var hasilNilai = tanggalBesok(tanggal, bulan, tahun);
console.log(hasilNilai);


