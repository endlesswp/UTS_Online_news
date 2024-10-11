
var port = 8880;
const axios = require('axios').default;
fs = require("fs");

const db = require("./lib/db");
var process = require('events');
process.EventEmitter.defaultMaxListeners = 100;
process.setMaxListeners(0);
var expressLayouts = require('express-ejs-layouts');
var express = require("express");
const session = require('express-session')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require("multer");
const cors = require('cors');
//var cors = require('cors')
let ejs = require('ejs');
var app = express();
app.use(cookieParser())
app.use(cors({ origin: '*'}));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(expressLayouts);
const url = require('url');
const path = require('path');
const themes = __dirname + '/views/';

app.use(bodyParser.urlencoded({  parameterLimit: 100000, limit: '50mb', extended: true })); 
app.use(session({secret: 'mjRahasiadong1215', resave: true, saveUninitialized: true}))
app.use(express.static(path.join(__dirname, '/views')));
app.use("/files", express.static(__dirname + "/files"));
var server = require("http").createServer(app);
server.setTimeout(600000);


global.appconfig= [];
global.listmenu = [];
global.token = "";
global.curren_url = "";
global.session_datauser = [];
global.themes = themes;
global.listmenu = []; 
global.groupmenu = [];
global.permitions = [];
global.token = "";
global.userprofile = "";
global.current_url = "";  
global.baseurl = ""; 

const DAY_IN_MS = 60 * 60 * 24 * 1000;
const YEAR_IN_MS = 365 * DAY_IN_MS;



const imageStorage = multer.diskStorage({
  destination: __dirname +"/files",
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

let imageFileFilter = function (req, file, cb) {
  console.log(file.mimetype)
  const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
};
/* end of upload images */

/****  Router ****/
// frond end
const main = require("./main");
const catcontroller = require("./categoryController");
//backed
const admin = require("./admin");
const imgRoute = require("./lib/img");
const abtcontroller = require("./about");

app.use("/",main);
app.use("/admin",admin);
app.use("/img",imgRoute); 
app.use("/category",catcontroller);
app.use("/about",abtcontroller);


app.post('/postNews', async function (req, res) {
  var params = req.body;
  var cnt = await db.promise("INSERT INTO newscontent (link,imageurl,idcategory,judul,content) VALUES (?,?,?,?,?)",[params.link,params.fotourl,params.category,params.judul,params.contentz]);
  if(cnt.affectedRows >0){
    let obj = { 'status':'sukses' }
    res.status(200).json(obj);
  }else{
    let obj = { 'status':'gagal' }
    res.status(200).json(obj);
  }
});

/****  end Router ****/  
/*
app.get('/404', function(req, res){
  const d = {   
    title: 'Pages not found',
    layout: false   	
 };
  res.render(themes+'error_pages_not_found', d);
});

app.get('*', function(req, res){
  res.redirect('/404');   
 // res.status(404).send('what???');
});  

app.use((error, req, res, next) => {
 console.log('error_path: ->', error.path);
 
   res.status(500).send({
  message: error.message,
  });
});
*/

server.listen(port, () => {
  console.log('Server berjalan di http://localhost:'+port);
});

