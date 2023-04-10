const ADODB = require('node-adodb');
const connectionString = 'Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:Users/Luke/Documents/code/GPT4 website/data/Database1.accdb;';

const connection = ADODB.open(connectionString);

module.exports = connection;
