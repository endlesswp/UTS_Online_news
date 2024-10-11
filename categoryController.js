const express = require("express");
const db = require("./lib/db");
const router = express.Router();
router.get('/',  async (req, res) => {  
   var idcategory = (req.query.idcategory != undefined)?  req.query.idcategory:null;
    console.log("idcategoryx:",idcategory);
    var cnt = await db.promise("SELECT * FROM newscontent LEFT JOIN category ON(newscontent.idcategory = category.idcategory) WHERE newscontent.idcategory ="+idcategory+" ORDER BY newscontent.idnews DESC");
   
    var catx = await db.promise("SELECT * FROM category ORDER BY idcategory "); 
    console.log("path:",__dirname)
    const d = {     
      title: 'Stock Order Item',
      heading: 'Stock Order Item',
      keywords: '', 
      content:cnt, 
      cat:catx 
   }; 
     res.render(themes+'categories', d ); 

  });


  module.exports = router;