// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

// var obj = new ObjectID()
// console.log(obj)

// object destructuring allows var to be set to a property and turn it into a variabe
var user = {name: 'Phil', age: 21}
var {name} = user

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server')
  }
  console.log('Connected to mongodb server')
  //
  // db.collection('Todos').insertOne({
  //   text: 'Do something',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // db.collection('Users').insertOne({
  //   name: 'Phil',
  //   age: 21,
  //   location: 'Manchester'
  // }, (err, results) => {
  //   if (err) {
  //     console.log('Unable to insert user', err)
  //   }
  //
  //   console.log(JSON.stringify(results.ops[0]._id.getTimestamp(), undefined, 2))
  // })

  db.close()
})
