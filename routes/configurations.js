const express = require('express');
const router = express.Router();

//
const categoryBookModel = require('../app/models/categoryBook');
const docTypeModel = require('../app/models/docType');
const durationModel = require('../app/models/duration');
const summaryModel = require('../app/models/summary');

router.get('/', (req, res)=>{
  res.render('configurations', {title: "Configurações" });
})

router.post('/categoryBook', async (req, res)=>{
  const { categoryBook } = req.body;

  try {
    const data = new categoryBookModel({
      categoryBook
    })
  
    const response = await data.save();
    if(response){
      res.send(`
        <script>
          alert('Configurado com sucesso!');
          window.location.href="/configurations";
        </script>  
      `)
    }
  } catch (error) {
    console.log(error);
  }

})

router.post('/summary', async(req, res)=>{
  const { summary } = req.body;

  try {
    const data = new summaryModel({
      summary
    })
  
    const response = await data.save();
    if(response){
      res.send(`
        <script>
          alert('Configurado com sucesso!');
          window.location.href="/configurations";
        </script>  
      `)
    }
  } catch (error) {
    console.log(error);
  }
})

router.post('/docType', async(req, res)=>{
  const { docType } = req.body;

  try {
    const data = new docTypeModel({
      docType
    })
  
    const response = await data.save();
    if(response){
      res.send(`
        <script>
          alert('Configurado com sucesso!');
          window.location.href="/configurations";
        </script>  
      `)
    }
  } catch (error) {
    console.log(error);
  }
})

router.post('/duration', async(req, res)=>{
  const { duration } = req.body;

  try {
    const data = new durationModel({
      duration
    })
  
    const response = await data.save();
    if(response){
      res.send(`
        <script>
          alert('Configurado com sucesso!');
          window.location.href="/configurations";
        </script>  
      `)
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;