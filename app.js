const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  
  const box_countdown = document.querySelector('.box-countdown');
  const entrega = document.querySelector('.entrega');
  const items = document.querySelectorAll('.box-countdown h4');

  let tempDate = new Date();
  let tempAno = tempDate.getFullYear();
  let tempMes = tempDate.getMonth();
  let tempDia = tempDate.getDate();
  
// let futureDate = new Date(2022,10,20,11,30,0);
const futureDate = new Date(tempAno, tempMes, tempDia + 10, 11, 30, 0)
const ano = futureDate.getFullYear();
const horas = futureDate.getHours();
const minutos = futureDate.getMinutes();
let mes = meses[futureDate.getMonth()];
const data = futureDate.getDate();
const diaSemana = weekdays[futureDate.getDay()];

entrega.textContent = `O sorteio terminará ${diaSemana}, ${data} de ${mes} de ${ano} às ${horas} horas e ${minutos} minutos`;


const futureTime = futureDate.getTime();

function tempoFaltando(){
    const hoje = new Date().getTime();
    const t = futureTime - hoje;

    //ms

const umDia = 24 * 60 * 60 * 1000;
const umaHora = 60 * 60 * 1000;
const umMinuto = 60 * 1000;
    //calculo
let dias = Math.floor(t/umDia)
let horas = Math.floor((t % umDia) / umaHora);
let minutos = Math.floor((t % umaHora) / umMinuto);
let segundos = Math.floor((t % umMinuto) / 1000);


const valores = [dias, horas, minutos, segundos];

function formato(item){
    if(item < 10){
        return item = `0${item}`
    }
    return item
}
//expirado---------------------------------------------
items.forEach(function(item, index){
    item.innerHTML = formato(valores[index]);
});
if(t<0){
    clearInterval(countdown);
    box_countdown.innerHTML = `<h4>Desculpe, esse sorteio já expirou</h4>`;
}

}


let countdown = setInterval(tempoFaltando, 1000);



tempoFaltando();