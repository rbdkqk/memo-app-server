const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "memoapp",
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "4202",
    database: process.env.DATABASE_PASSWORD,
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "4202",
    database: process.env.DATABASE_PASSWORD,
    host: "localhost",
    dialect: "mysql",
  },
};
