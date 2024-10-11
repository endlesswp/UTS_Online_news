const express = require("express");
const db = require("./lib/db");
const router = express.Router();
router.get('/',  async (req, res) => {  
    //let moduleconfig = await modules.getAllConfigList(_data); 
   // var categorila = ["Sport","ddd","ccc"];
   var categorila = await db.promise("SELECT * FROM category");

   var cnt = await db.promise("SELECT * FROM newscontent LEFT JOIN category ON(newscontent.idcategory = category.idcategory) ORDER BY idnews DESC ");
    const d = {     
      title: 'Stock Order Item',
      heading: 'Stock Order Item',
      keywords: '',  
      categories:categorila,
      ncontent:cnt,
   }; 
     res.render(themes+'admin', d ); //admin.ejs 
  });

  

  module.exports = router;