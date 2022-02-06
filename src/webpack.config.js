const path = require('path');
const Dotenv = require('dotenv-webpack');



module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  plugins:[
    new Dotenv()
  ]
}