// soal 1 
// jawaban 1
var nilai = 90;

if (nilai >= 85){
  console.log('Nilai anda adalah : A' );
}else if(nilai >= 75 &&  nilai < 85){
  console.log('Nilai anda adalah : B');
}else if(nilai >= 65 && nilai < 75){
  console.log('Nilai anda adalah : C');
}else if(nilai < 55){
  console.log('Nilai anda : E');
}else{
  console.log('anda tidak mempunyai nilai ');
};

// soal 2
// jawaban 2
var tanggal = 15;
var bulan = 6;
var tahun = 2000;

switch(bulan){
  case 4:{
    console.log(tanggal + ' april ' + tahun);
    break;
  }
  case 5:{
    console.log(tanggal + ' mei ' + tahun);
    break;
  }
  case 6:{
    console.log( tanggal + ' juni ' + tahun);
    break;
  }
  default:
    console.log('salah memasukan tanggal lahir');
}

/// soal 3 
//jawaban 3

//  jika n = 3
let k = '';
let n = 3;
for( let a = 0; a < n; a++){
  for(let b = 0; b <= a; b++){
    k += '#';
  }
  k += '\n';
}
console.log(k);

/// soal 4
//jawaban 4
var s = '';
var m = 5;
var x = 0;
var y = 0;

for (let i = 1; i <= m; i++){
  for(let j = 0; j < 1 ; j++){
    if(x == 0){
      console.log( i + ' -' +' I love programming');
    }else if(x == 1){
      console.log(i + ' -' +' I love javascript');
    }else if(x == 2){
      console.log(i + ' -' + ' I love vuejs');
    }
    if (i % 3 == 0 ){
      console.log('===');
    }
    y++;
    x++;
    if(x == 3){
      x = 0;
    }
  }
}
console.log(s);