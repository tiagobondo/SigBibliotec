//Recebendo os elementos com ID
const inputPassword = document.querySelector('#inputPassword');
const btnEye = document.querySelector('#btnEye');
//Adicionando o evento ao clicar
btnEye.addEventListener('click', ()=>{
  inputPassword.type = 'text';//Tornando visible o input password
  setTimeout(()=>{ //Function para cuidar do input depois de mil segundo volta com password
    inputPassword.type = 'password';
  },500)
})
