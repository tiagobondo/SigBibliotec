//Recebendo os elementos com ID
const inputPassword = document.querySelector('#inputPassword');
const inputPasswordRec = document.querySelector('#inputPasswordRec');
const btnEye = document.querySelector('#btnEye');
const btnEyeRec = document.querySelector('#btnEyeRec');
//Adicionando o evento ao clicar
btnEye.addEventListener('click', ()=>{
  inputPassword.type = 'text';//Tornando visible o input password
  inputPasswordRec.type = 'text';
  setTimeout(()=>{ //Function para cuidar do input depois de mil segundo volta com password
    inputPassword.type = 'password';
    inputPasswordRec.type = 'password';
  },1000)
})
//Adicionando o evento ao clicar
btnEyeRec.addEventListener('click', ()=>{
  inputPassword.type = 'text';//Tornando visible o input password
  inputPasswordRec.type = 'text';
  setTimeout(()=>{ //Function para cuidar do input depois de mil segundo volta com password
    inputPassword.type = 'password';
    inputPasswordRec.type = 'password';
  },1000)
})
