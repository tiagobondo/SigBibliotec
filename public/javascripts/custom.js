//Pegando o input
const inputDate = document.querySelector('#inputDate');
//Pegando o label Time apartir do arquivo Dashboard
const labelDate = document.querySelector('#dateLabel');
//Buscando data e houra
var date = new Date();
var dateNow = date.toDateString();
const onlyHour = date.toLocaleTimeString();
//Atribuindo a data no input
inputDate.value = dateNow;
inputDate.value += onlyHour;
//
  //Atribuindo a data
  labelDate.innerHTML = date;