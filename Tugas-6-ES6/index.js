// no 1
// mencari luas persegi
// dengan metode array fucntion
const hitungLuas = (panjang,lebar) => {
  let luas = panjang * lebar;
  return luas;
}

// panggil Function
console.log('luas persegi panjang adalah ' + '\n' + hitungLuas(4,12));

// mencari keliling
const hitungKeliling = (panjang,lebar) => {
  let keliling = 2 * panjang + lebar;
  return keliling;
}
//panggil Function
console.log('keliling persegi panjang adalah ' + '\n' + hitungKeliling(4,12));


// soal 2

// const newFunction = function literal(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function(){
//       console.log(firstName + " " + lastName)
//     }
//   }
// }
 
// //Driver Code 
// newFunction("William", "Imoh").fullName() 

const nama = (namaAwal,namaAkhir)=>{
  const nick = {namaAwal,namaAkhir};
  const namaLengkap = `${namaAwal} ${namaAkhir}`;
  return namaLengkap
}
console.log(nama("ilham","maulana sugianto"));

// soal 3

const newObject = {
  firstName: "Ilham ",
  lastName: "Maulana Sugianto",
  address: "Jl cicadas pasar II",
  hobby: "Berantem",
}

const {firstName, lastName, address, hobby} = newObject;
console.log(firstName, lastName, address, hobby);


//soal 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
let westAndEast  =[...west,...east];
console.log(westAndEast);


// soal 5

const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet ;
let after = `Lorem ${view} dolor sit amet, consectetur adipiscing elit ${planet} `;
console.log(after);


