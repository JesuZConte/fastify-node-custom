const path = require('path');

console.log(require('dotenv').config());
// this will add .env properties to process.env
require('dotenv').config({ path: path.join(__dirname, '..', '.env')});

const PORT = process.env.PORT || 5001;

const server = require('./src/app')({});

const start = async () => {
  try {
    await server.listen(PORT, '0.0.0.0');
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
