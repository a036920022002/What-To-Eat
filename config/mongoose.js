const mongoose = require('mongoose')
require('dotenv').config()

const MY_ENV = process.env.MY_ENV
mongoose.connect(MY_ENV, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
  console.log('\n==============');
  console.log('mongodb_uri', process.env.MY_ENV);
  console.log('MY_ENV', MY_ENV);
  console.log('==============');
})

module.exports = db