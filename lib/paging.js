module.exports = {
    getData: async function (QUERY,COUNT_QUERY,PAGES_NO,MAX_ITEM_PER_ROW,MAX_VISIBLE_PAGES,ORDER_BY,ASC) {
            var db   = require('./db');
        
          return new Promise(async(resolve, reject) => {
              // limit as 20
            const _LIMIT = (MAX_ITEM_PER_ROW !== 'undefined') ? MAX_ITEM_PER_ROW :50;
            // page number
            const _PAGE =  (PAGES_NO !== 'undefined') ? PAGES_NO :0;
            // calculate offset
            const _OFFSET = (_PAGE - 1) * _LIMIT
            // calculate MAXIMUM BOTTON PAGING
            const _MAX_VISIBLE_PAGES = (MAX_VISIBLE_PAGES !== 'undefined') ? MAX_VISIBLE_PAGES :10;
            // query for fetching data with page number and offset
            /* ada bugs jika pages lebih besar dan jumlah data lebih kecil dari page saat ini data tidak ada
               yang di tampilkan
            */
                // limit as 20
            const _ASC = (ASC !== undefined) ? ASC :"";
           var _ORDER_BY = (ORDER_BY !== undefined) ? ORDER_BY :"";	
            if(_ORDER_BY != ""){	
            const arr = ORDER_BY.split(',');
            var total_item = 0;	
              var neorderby = []
              if(arr.length > 0){
                 for (let i = 0; i < arr.length; i++) {
                     if(arr[i] != ""){
                         neorderby.push(arr[i] + " "+_ASC);        
                      }   
                  }
                  ORDER_BY = String(neorderby);
              }else{
                  ORDER_BY = ORDER_BY+" "+_ASC
              }
              
            }
           
             _ORDER_BY = (ORDER_BY !== undefined) ? " ORDER BY "+ORDER_BY :"";
            
                
              const QR = QUERY+_ORDER_BY+" LIMIT ? OFFSET ?";
              var count   = await db.promise(COUNT_QUERY,[]);
              var results = await db.promise(QR,[_LIMIT,_OFFSET]);
              var total_page   = 0;
              var pager_button = [];
              //console.log("LIMIT:"+ _LIMIT+"\r\n");
              //console.log("OFFSET:"+ _OFFSET+"\r\n");
              if(count.length > 0){
                if(count[0].numrows > 0){ 
                  total_page = Math.floor(count[0].numrows / MAX_ITEM_PER_ROW); 
                  total_item = count[0].numrows;
                      let end_button_number = Number(_PAGE) + _MAX_VISIBLE_PAGES;
                      let start_button_number = end_button_number - _MAX_VISIBLE_PAGES;
                      if(_PAGE <= _MAX_VISIBLE_PAGES-1){  
                        for(let i = 0 ; i < _MAX_VISIBLE_PAGES; i++){
                          if(i <= total_page){
                                pager_button.push(i+1); 
                                //console.log("\n\r"); 
                                //console.log("PAGES:"+ (i+1));   
                          }
                        }
                      }else{
                        for(let i = start_button_number ; i < end_button_number; i++){
                          if(i <= total_page){
                                pager_button.push(i); 
                                //console.log("\n\r"); 
                                //console.log("PAGES:"+ i);  
                          }  
                        }
                      }
                  }
                  
              }
             // total_pagex = Math.floor(count[0].numrows / MAX_ITEM_PER_ROW); 
             // console.log("total_page:"+ total_page+"\r\n");  
              var nmRow = (count[0] == undefined)? 0:count[0].numrows;
              total_page_x = Math.ceil(nmRow / MAX_ITEM_PER_ROW); 
                var result = {  
                  'page_row':results.length,
                  'page_num':_PAGE,
                  'total_item':total_item,
                  'total_pages':total_page_x, 
                  'pager_buttons':pager_button,        
                  'data':results
                }
              resolve(result);
          
          });
      }
    }