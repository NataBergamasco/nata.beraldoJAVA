/*declarando variáveis*/
let altura;
let peso;
let imc;
/*criando uma função para calculo do imc*/
function calcImc() {
  let altura = (document.getElementById("al").value)/100;
  let peso = document.getElementById("ps").value;

  //converter para numero

  altura = parseFloat(altura);

  /*tipos de dados:
  int = numeros inteiros
  float = de ponto flutuante, explo o preço da gasolina 6.27
  boolean = verdadeiro ou falso*/

  peso = parseFloat(peso)

  let imc = peso / (altura*altura);
  window.alert("seu IMC é:" + imc);

}
function alternarTemas_claro (){
  const corpo = document.body;
  corpo.classList.toggl ("escuro");
  corpo.classList.toggle ("claro");
}

function alternarTemas_escuro (){
  const corpo = document.body;
  corpo.classList.toggl ("escuro");
  corpo.classList.toggle ("claro");
}