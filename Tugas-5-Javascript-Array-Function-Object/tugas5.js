// soal 1

var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort();

for(let i = 0; i < daftarHewan.length; i++ ){
  console.log(daftarHewan[i]);
}
console.log('====================================');
// soal 2

function introduce(){
  return `nama saya adalah ${data.name}, umur saya ${data.age}, \nalamat saya di ${data.address}, dan saya punya hobby yaitu ${data.hobby} !`;
}



var data = {name : "ilham" , age : 21 , address : "jl.cicadas pasar" , hobby : "nonton tv" };

var perkenalan = introduce(data);
console.log(perkenalan);
console.log('====================================');


// soal 3

function hitung_huruf_vokal(dataVoc){
  var angka = 0;
  var hurufVok = dataVoc.toLowerCase().split('');
  for(var i = 0; i < hurufVok.length; i++){
      if(hurufVok[i] == 'a' || hurufVok[i] == 'i' || hurufVok[i] == 'u' || hurufVok[i] == 'e' || hurufVok[i] == 'o'){
          angka += 1;
      }
  }
  return angka;
}

var hurufVokal1 = hitung_huruf_vokal("ilham");
var hurufVokal2 = hitung_huruf_vokal("maulana"); 
var hurufVokal3 = hitung_huruf_vokal("asep"); 
var hurufVokal4 = hitung_huruf_vokal("yugi"); 
console.log('Huruf Vokal Pada Nama Saya Ada : \n ', hurufVokal1 , hurufVokal2, hurufVokal3, hurufVokal4, '\n Pada Masing - Masing Setiap Kata');
console.log('====================================');

// soal 4

function hitung(num){
  return num * 2 - 2;
}


console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8


