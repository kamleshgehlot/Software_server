const MySQL = require("mysql");
let dbOptions = '';
const { env, dbName } = require("./databaseMySQL");

if (env === 'prod') {
   dbOptions = {
      host: 'localhost',
      user: 'root',
      password:'IMT0IsS2XNqdU0ZC',
      port: 3306
   };
} else {
   dbOptions = {
      host: 'localhost',
      user: 'root',
      password: '',
   };
}

let connectionPool = MySQL.createPool({ host: dbOptions.host, user: dbOptions.user, password: dbOptions.password, port: dbOptions.port, database: dbName });
const getConnection = async function (done) {
   try {
      connectionPool.getConnection(done);
   } catch (ex) {
      console.log("ex........", ex);
      throw ex;
   }
};
module.exports = { getConnection: getConnection, dbName: dbName };