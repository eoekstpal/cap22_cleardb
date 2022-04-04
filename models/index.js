'use strict';

const Sequelize = require('sequelize');
const db = {};

const config = {
  "username": "ba67dd009bf67a",
  "password": "cb220048",
  //"password2": "heroku_7f91a283fff906c",
  "database": "heroku_7f91a283fff906c",
  "host": "us-cdbr-east-05.cleardb.net",
  "dialect": "mysql",
  "port": "3306",
  "operatorsAliases": 0,
  "define": {
    "underscored": false,
    "freezeTableName": false,
    "charset": "utf8",
    "dialectOptions": {
      "collate": "utf8_general_ci"
    },
    "timestamps": true,
    "paranoid": true
  }
}

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
  );

//db 연결
db.User = require('./user')(sequelize, Sequelize)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
