const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: DATABASE_PASSWORD,
    database: "memoapp",
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "4202",
    database: DATABASE_PASSWORD,
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "4202",
    database: DATABASE_PASSWORD,
    host: "localhost",
    dialect: "mysql",
  },
};
