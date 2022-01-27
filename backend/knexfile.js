require('dotenv').config()

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.DbHost,
      user:     process.env.DbUser,
      database: process.env.DbName,
      password: process.env.DbPass
    },
  }
};
