const modalCadTable = document.querySelector('#modalCadTable');
const btnModalCad = document.querySelector('#modalViewCad');

btnModalCad.addEventListener('click', ()=>{
  modalCadTable.classList.add('openModalCadTable');

  modalCadTable.addEventListener('click', (e)=>{
    if(e.target.id == "fechar" || e.target.id == "modalCadTable"){
      modalCadTable.classList.remove('openModalCadTable');
    }
  })
})

const table = document.querySelector('#table');
const people = document.querySelector('#people');
const chairs = document.querySelector('#chairs');

const modalVisTable = document.querySelector('#modalVisTable');

const visData = (data) => {
  modalVisTable.classList.add('openModalVisTable');

  modalVisTable.addEventListener('click', (e)=>{
    if(e.target.id == "fecharModalVis" || e.target.id == "modalVisTable"){
      modalVisTable.classList.remove('openModalVisTable');
    }
  })

  table.innerText = data.table;
  people.innerText = data.people;
  chairs.innerText = data.chairs;
}

const id = document.querySelector('#id');
const tabledit = document.querySelector('#tabledit');
const peopledit = document.querySelector('#peopledit');
const chairsid = document.querySelector('#chairsid');
const modalUpdateTable = document.querySelector('#modalUpdateTable');

const editData = (data) => {
  id.value = data.id;
  tabledit.value = data.table;
  peopledit.value = data.people;
  chairsid.value = data.chairs;

  modalUpdateTable.classList.add('openModalUpdateTable');

  modalUpdateTable.addEventListener('click', (e)=>{
    if(e.target.id == "fechar" || e.target.id == "modalUpdateTable"){
      modalUpdateTable.classList.remove('openModalUpdateTable');
    }
  })


}
