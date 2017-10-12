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

  // db.collection('Todos').find({
  //   _id: new ObjectID('59dcf0f0974daf5fb419887b')
  // }).toArray().then((docs) => {
  //   console.log('Todos:')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch Todos')
  // })
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`)
  // }, (err) => {
  //   console.log('Unable to fetch Todos')
  // })
  db.collection('Users').find({name: 'Mike'}).toArray().then((docs) => {
    console.log(`Querying User document: ${JSON.stringify(docs, undefined, 2)}`)
  })
  // db.close()
})
