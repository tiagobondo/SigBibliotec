setInterval(()=>{
//Buscando data e houra
var date = new Date();
var dateNow = date.toDateString();
var onlyHour = date.toLocaleTimeString();
//Pegando o input
const inputDate = document.querySelector('#inputDate');
//Atribuindo a data no input
inputDate.value = dateNow;
inputDate.value += onlyHour;
},1)