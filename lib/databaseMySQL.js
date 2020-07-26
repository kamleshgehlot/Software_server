const env = 'local';

let DbName = 'connectivitysoftwaresolutions';
let domainName = 'http://connectivitysoftwaresolutions.com/';

console.log('env...', env);

if (env === 'prod') {
  DbName = 'connectivitysoftwaresolutions';
  domainName = 'http://connectivitysoftwaresolutions.com/';
} else {  
  DbName = 'connectivitysoftwaresolutions'
  domainName = 'localhost:5000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };