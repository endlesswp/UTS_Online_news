const express = require("express");
const db = require("./lib/db");
const router = express.Router();
router.get('/',  async (req, res) => {  
    //let moduleconfig = await modules.getAllConfigList(_data); 
    
    var cnt = await db.promise("SELECT * FROM newscontent LEFT JOIN category ON(newscontent.idcategory = category.idcategory)  ORDER BY newscontent.idnews DESC LIMIT 5");
    var catx = await db.promise("SELECT * FROM category ORDER BY idcategory ");
    console.log("path:",__dirname)
    const d = {     
      title: 'Stock Order Item',
      heading: 'Stock Order Item',
      keywords: '', 
      content:cnt, 
      cat:catx 
   }; 
     res.render(themes+'index', d ); 

  });


  module.exports = router;