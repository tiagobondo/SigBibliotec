const btnModal = document.querySelector('#btnViewModal');
const modal = document.querySelector('#modal');
const btnFechar = document.querySelector('#fechar');

btnModal.addEventListener('click', (e)=>{
  //Criando uma class dentro do modal
  modal.classList.add('abrir');
})

btnFechar.addEventListener('click', ()=>{
  //Removendo a classa anteriormente criada
  modal.classList.remove('abrir');
})

//Trazendo os elementos labels para posteriormente serm atribuidos lá dados do leitor
const fullName = document.querySelector('#fullName'); 
const docType = document.querySelector('#docType'); 
const numberDoc = document.querySelector('#numberDoc'); 
const dateRegiste = document.querySelector('#date'); 
const book = document.querySelector('#book'); 
const quantybook = document.querySelector('#quantybook'); 
const summary = document.querySelector('#summary'); 
const duration = document.querySelector('#duration');
//Trazendo o modal de Visualização dos dados
const modalVis = document.querySelector('#modalVis');
//Trazendo o botão que vai fechar o modalVis quando for clicado
const fecharModalVis = document.querySelector('#fecharModalVis');

//Pegando a função que traz os dados para o modal
const visData = (data) => {
  //Atribuino os dados a cada elemento label proveniente do readers
  fullName.innerText = data.fullName;
  docType.innerText = data.docType;
  numberDoc.innerText = data.docNumber;
  dateRegiste.innerText = data.dateRegister;
  book.innerText = data.livro;
  quantybook.innerText = data.quantidadeLivro;
  summary.innerText = data.assunto;
  duration.innerText = data.duracao;

  //Criando uma class dentro do modalVis
  modalVis.classList.add('openModalVis');
  //
  fecharModalVis.addEventListener('click', ()=>{
    //Removendo a class anteriormente criada
    modalVis.classList.remove('openModalVis');
  })
}

//Trazendo os elementos pelo id
const btnCloseModalUpdate = document.querySelector('#btnCloseModalUpdate');
const modalUpdate = document.querySelector('#modalUpdate');
const txtFullNameEdit = document.querySelector('#txtFullNameEdit');
const formModalUpdate = document.querySelector('#formModalUpdate');
//Pegando a função que traz os dados para o modal edit
const editData = (data) => {
  //Criando uma class dentro do modalUpdate
  modalUpdate.classList.add('openModalUpdate');

  txtFullNameEdit.value = data.fullName;

  btnCloseModalUpdate.addEventListener('click', ()=>{
      //Removendo a class anteriormente criada
    modalUpdate.classList.remove('openModalUpdate');
    //
  })
//Dando acção no formulário apartir do JavaScripr (action="")
  formModalUpdate.addEventListener('submit', (e)=>{
    e.srcElement.action += `/update/${data.id}`
  })
}