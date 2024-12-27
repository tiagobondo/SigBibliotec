const btnmodalViewCad = document.querySelector('#modalViewCad');
const modalCadPratiles = document.querySelector('#modalCadPratiles');

btnmodalViewCad.addEventListener('click', ()=>{
  modalCadPratiles.classList.add('openModalCadPratiles');

  modalCadPratiles.addEventListener('click', (e)=>{
    if(e.target.id == "fechar" || e.target.id == "modalCadPratiles"){
      modalCadPratiles.classList.remove('openModalCadPratiles');
    }
  })
})


const pratile = document.querySelector('#pratile');
const capacityBooks = document.querySelector('#capacityBooks'); 
const modalVisPratiles = document.querySelector('#modalVisPratiles');

const visData = (data) => {
  modalVisPratiles.classList.add('openModalVisPratiles');

  pratile.innerText = data.pratiles;
  capacityBooks.innerText = data.capacityBooks;

  modalVisPratiles.addEventListener('click', (e)=>{
    if(e.target.id == "fecharModalVis" || e.target.id == 'modalVisPratiles'){
      modalVisPratiles.classList.remove('openModalVisPratiles');
    }
  })
}

const modalUpdatePratiles = document.querySelector('#modalUpdatePratiles');
const id = document.querySelector('#id');
const pratiledit = document.querySelector('#pratiledit');
const capacityBooksedit = document.querySelector('#capacityBooksedit'); 

const editData = (data) => {
  id.value = data.id;
  pratiledit.value = data.pratiles;
  capacityBooksedit.value = data.capacityBooks;

  modalUpdatePratiles.classList.add('openModalUpdatePratiles');

  modalUpdatePratiles.addEventListener('click', (e)=>{
    if(e.target.id == "fechar" || e.target.id == "modalUpdatePratiles"){
      modalUpdatePratiles.classList.remove('openModalUpdatePratiles');
    }
  })
}