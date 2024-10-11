module.exports = {
    images: async function (_filename,buffer,userid,usedOn) {
        const db = require('./db');
          var fs = require('fs');
        var mime = require('mime-types');
        var path = require('path')
    const sizeOf = require('image-size');
  
           return new Promise((resolve, reject) => {
                      var timestamp = new Date().getTime();
           var imgName = timestamp+"-"+_filename
          var realfileName = 'files/images/' + imgName;
          var fileName = __dirname+'/' + imgName;
          let output_file =  {"idimages": null,
                                          "status": 0,
                                          "path": 0,  
                                          "filename": "",
                                          "iduser":null
                                         }
               
          fs.open(fileName, 'a', 0755, async function(err, fd) {
              if (err) throw err;
              fs.write(fd, buffer, null, 'Binary', async function(err, written, buff) {
                  fs.close(fd, async function() {
                      var stats = fs.statSync(fileName)
                      var fileMine = mime.lookup(fileName);
                       var fileExt = path.extname(fileName);
                       const dimensions = sizeOf(fileName);
                       qr2 ="INSERT INTO `userimages` (`iduser`,`filename`,`height`,`width`,`filesize`,`path`,`tipe`,`ext`,`used_on`) VALUES (?,?,?,?,?,?,?,?,?)";
              _userimages = await db.promise(qr2,[userid,imgName,dimensions.height,dimensions.width,stats.size,realfileName,fileMine,fileExt,usedOn]);
                      if(Object.keys(_userimages).length > 0){
                           output_file = {
                                "idimages": _userimages.insertId,
                                "status":1,
                                "path":fileName,
                                "filename":imgName,
                                "iduser":userid
                            }
                          resolve(output_file)
                       }
                  });
              })
          });
        }
      )
    },
    multipleImages: async function (files,userid,usedOn) {
        const db = require('./db');
          var fs = require('fs').promises;
          var fz = require('fs');
        var mime = require('mime-types');
        var path = require('path')
    const sizeOf = require('image-size');
        var path = require('path'); 
  
        return new Promise((resolve, reject) =>  {
           
                       async function openFile(_file) {
                        try {
                             var timestamp = new Date().getTime();
                             var imgName = timestamp+"-"+_file.fileName
                             var realfileName = 'files/images/' + imgName;
                             var fileName = __dirname+'/' + imgName;
                             var __out = await fs.writeFile(fileName, _file.file, 'base64');
                              
                               var stats = fz.statSync(fileName)
                               var fileMine = mime.lookup(fileName);
                               var fileExt = path.extname(fileName);
                               const dimensions = sizeOf(fileName);
                               let __output_file =  {"idimages": null,
                                                  "status": 0,
                                                  "path": "",  
                                                  "filename": "",
                                                  "iduser":null
                                                 }
                               
                               
                               qr2 ="INSERT INTO `userimages` (`iduser`,`filename`,`height`,`width`,`filesize`,`path`,`tipe`,`ext`,`used_on`) VALUES (?,?,?,?,?,?,?,?,?)";
                      _userimages = await db.promise(qr2,[userid,imgName,dimensions.height,dimensions.width,stats.size,realfileName,fileMine,fileExt,usedOn]);
                              console.log("ID:"+_userimages.insertId+"_userimages:-->"+ JSON.stringify(_userimages)+"\r\n");
                              if(_userimages.affectedRows > 0){
                                  __output_file.idimages = _userimages.insertId;
                                  __output_file.status = 1;
                                  __output_file.path = fileName;
                                  __output_file.filename = imgName;
                                  __output_file.iduser = userid;
                               }
                             return __output_file;
                        } catch (error) {
                          console.error(`Got an error trying to write to a file: ${error.message}`);
                        }
                      }
                     
                                
                         (async function () {
                                 let resultUpload = [];
                                 let jom = [];
                             
                                for (const _file of files) {
                                 var _out = await openFile(_file);
                                  //console.log("_out:-->"+ JSON.stringify(_out)+"\r\n");
                                  resultUpload.push(_out);
                                     jom.push("sss")
                                 };
                                console.log("out:-->"+ JSON.stringify(resultUpload)+"\r\n");
                              resolve(resultUpload);
                         })();
        });	
  },
  singgleImages:async function (_file,_filename,userid,usedOn) {
        const db = require('./db');
          var fs = require('fs');
        var mime = require('mime-types');
        var path = require('path')
    const sizeOf = require('image-size');
  
           return new Promise((resolve, reject) => {
                      var timestamp = new Date().getTime();
          var imgName = timestamp+"-"+Math.floor(Math.random() * 100)+"-"+_filename;
          var realfileName = 'files/images/' + imgName;
          var fileName = __dirname+'/' + imgName;
          let output_file =  {"idimages": null,
                                          "status": 0,
                                          "path": 0,  
                                          "filename": "",
                                          "iduser":null
                                         }
               
            //var __out = await fs.writeFile(fileName, _file.file, 'base64');
          fs.open(fileName, 'a', 0755, async function(err, fd) {
              if (err) throw err;
              fs.writeFile(fileName, _file, 'base64', async function(err, written, buff) {
                  fs.close(fd, async function() {
                      var stats = fs.statSync(fileName)
                      var fileMine = mime.lookup(fileName);
                       var fileExt = path.extname(fileName);
                       const dimensions = sizeOf(fileName);
                       qr2 ="INSERT INTO `userimages` (`iduser`,`filename`,`height`,`width`,`filesize`,`path`,`tipe`,`ext`,`used_on`) VALUES (?,?,?,?,?,?,?,?,?)";
              _userimages = await db.promise(qr2,[userid,imgName,dimensions.height,dimensions.width,stats.size,realfileName,fileMine,fileExt,usedOn]);
                      if(_userimages.affectedRows > 0){
                           output_file = {
                                "idimages": _userimages.insertId,
                                "status":1,
                                "path":fileName,
                                "filename":imgName,
                                "iduser":userid
                            }
                          resolve(output_file)
                       }
                  });
              })
          });
        }
      )
    },
  simpleUploadImages:async function (_file) {
        const db = require('./db');
          var fs = require('fs');
        var mime = require('mime-types');
        var path = require('path')
    const sizeOf = require('image-size');
           return new Promise((resolve, reject) => {
                      var timestamp = new Date().getTime();
          var imgName = timestamp+"-"+Math.floor(Math.random() * 100)+"-"+_file.originalname;
          var realfileName = 'files/images/' + imgName;
          var fileName = __dirname+'/' + imgName;
          let output_file =  {"idimages": null,
                                          "status": 0,
                                          "path": 0,  
                                          "filename": "",
                                          "iduser":null
                                         }
               
            //var __out = await fs.writeFile(fileName, _file.file, 'base64');
          fs.open(fileName, 'a', 0755, async function(err, fd) {
              if (err) throw err;
              fs.writeFile(fileName, _file, 'base64', async function(err, written, buff) {
                  fs.close(fd, async function() {
                      var stats = fs.statSync(fileName)
                      var fileMine = mime.lookup(fileName);
                       var fileExt = path.extname(fileName);
                       const dimensions = sizeOf(fileName);
                           output_file = {
                                "status":1,
                                "path":fileName,
                                "filename":imgName,
                            }
                          resolve(output_file)
                  });
              })
          });
        }
      )
    } 	
  }
  