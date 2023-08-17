const form = document.querySelector('.form');
const body = document.querySelector('body');

body.addEventListener('onClick', function(){
  console.log('Ok!')
})



form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log("Evento enviado");
  setResultado('Ola mundo');
});

function setResultado(msg) {
   const resultado = document.querySelector('.resultado');
   resultado.innerHTML = msg;
}