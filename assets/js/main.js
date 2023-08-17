const form = document.querySelector('.form');
const body = document.querySelector('body');

body.addEventListener('onClick', function(){
  console.log('Ok!')
})



form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  console.log(peso,altura);

  if (!peso){
    setResultado('Peso inválido', false);
    return;
  }
  if (!altura){
    setResultado('Altura inválida', false);
    return;
  }



});


function createP () {
  const p = document.createElement('p');
  return p;
}


function setResultado(msg, isValid) {
   const resultado = document.querySelector('.resultado');
   resultado.innerHTML = '';
   const p = criaP();
}