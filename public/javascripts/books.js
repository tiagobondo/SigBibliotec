//Código Js do arquivo readers.ejs

//Trazendo os elementos do HTML5 para o JS
const btnModalCad = document.querySelector('#btnViewModalCad');
const modalCad = document.querySelector('#modalCad');
//Dando acção ao botao para chamar o modal de vis
btnModalCad.addEventListener('click', ()=>{
  modalCad.classList.add('openModalCad');

  modalCad.addEventListener('click', (e)=>{
    if(e.target.id == "fechar" || e.target.id == "modalCad"){
      modalCad.classList.remove('openModalCad');
    }
  })
})

//Modal Visualizar

//Trazendo os elemetos para posteriomente serem atribuidos os valores
const book = document.querySelector('#book');
const categoryBook = document.querySelector('#categoryBook');
const numberBooks = document.querySelector('#numberBooks');
const editor = document.querySelector('#editor');
const edition = document.querySelector('#edition');
const author = document.querySelector('#author');
const provider = document.querySelector('#provider');
const pratile = document.querySelector('#pratile');

const modalVis = document.querySelector('#modalVis');

const visData = (data)=>{
  book.innerText = data.book;
  categoryBook.innerText = data.categoryBook;
  numberBooks.innerText = data.numberBooks;
  editor.innerText = data.editor;
  edition.innerText = data.edition;
  author.innerText = data.author;
  provider.innerText = data.provider;
  pratile.innerText = data.pratile;

  modalVis.classList.add('openModalVis');

  modalVis.addEventListener('click', (e)=>{
    if(e.target.id == "fecharModalVis" || e.target.id == "modalVis"){
      modalVis.classList.remove('openModalVis');
    }
  })
}

const modalUpdate = document.querySelector('#modalUpdate');
const id = document.querySelector('#id');
const bookedit = document.querySelector('#bookedit');
const numberBooksedit = document.querySelector('#numberBooksedit');
const editoredit = document.querySelector('#editoredit');
const editionedit = document.querySelector('#editionedit');
const authoredit = document.querySelector('#authoredit');
const provideredit = document.querySelector('#provideredit');

const selectOption1 = document.querySelector('#option1');

const editData = (data)=>{

    id.value = data.id;
    bookedit.value = data.book;
    numberBooksedit.value = data.numberBooks;
    editoredit.value = data.editor;
    editionedit.value = data.edition;
    authoredit.value = data.author;
    provideredit.value = data.provider;
    selectOption1.innerText = data.pratile;
    selectOption1.value = data.pratile;

  modalUpdate.classList.add('openModalUpdateBook');

  modalUpdate.addEventListener('click', (e)=>{
    if(e.target.id == "fechar" || e.target.id == "modalUpdate"){
      modalUpdate.classList.remove('openModalUpdateBook');
    }
  })
}