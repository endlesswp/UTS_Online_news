
var mysql = require('mysql');
/*
		var db = mysql.createConnection({
			connectionLimit: 10000,
			host: 'localhost',
			user: 'belisip',
			password: 'Rahasiadong1215',
			database: 'belisip_web',
			socketPath: '/var/run/mysqld/mysqld.sock',
			debug:   false
		})
	db.connect(function(err){
		if (err) console.log("db err :"+err);
		else console.log('db connected');
	})
db.promise = (sql, params) => {
    return new Promise((resolve, reject) => {
      db.query(sql,params, (err, result) => {
          if(err){
			  console.log('error:'+err);
			  reject(err);
		  }else{resolve(result);} 
          });
       });
};
*/
////////////
var db = mysql.createPool({
    connectionLimit : 10,
    acquireTimeout:6000000,  
    host: 'localhost',  
    user: 'root',    
    password: '',
    database: 'news'      
});
  
db.promise =  (sql, params) => {
 return new Promise((resolve, reject) => {
	 
	 db.getConnection(function (err, connection) {
       // console.log('Database - Connection id ' + connection.threadId);
            if (err) {
                if (typeof connection !== 'undefined' && connection) {
                    connection.release();
                }
                console.log('error:'+err);
			    reject(err);
                throw err;
            }
   
            connection.query(sql, params, function (err, rows) {
                connection.release();
                if (!err) {
                    resolve(rows)
                }
                else {
                    reject(err)
                }

            });

            connection.on('error', function (err) {
                //if(connection.rollback()){ connection.release(); }
                connection.release();
                reject(err);
                throw err;
            });
		 
          });
   
})
}  
module.exports = db;