const express = require("express");
const db = require("./lib/db");
const router = express.Router();
router.get('/',  async (req, res) => {  
    //let moduleconfig = await modules.getAllConfigList(_data); 
    
    const d = {     
      title: 'Stock Order Item',
      heading: 'Stock Order Item',
      keywords: '', 

   }; 
     res.render(themes+'about', d ); 

  });


  module.exports = router;