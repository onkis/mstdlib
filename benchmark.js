let mstdlib = require('./dist/mstdlib.js');

const {Client} = mstdlib.pg;

const client = new Client({
 "database": "triblio_dev",
 "user": "postgres",
 "port": 5432,
 "password": "password",
 "host": "127.0.0.1"
});


client.connect();

client.query(`Select count(*) from "Users";`, function(err, res){
  console.log("response", err, res);
  client.end();
  process.exit(0);
})