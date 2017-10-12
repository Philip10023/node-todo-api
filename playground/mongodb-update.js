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

  // update arguments
  // filter: allows us to target docs
  // update: updates the property
  // options: options defined in mongodb.github.io under collection/methods/findOneAndUpdate
  // callback returns promise if no callback passed
  // USING UPDATE OPERATORS LIKE '$set'
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("59dd176655a29b82cdf82344")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  // CHALLENGE
  // increment age by 1, set name to different name

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59dd188a55a29b82cdf823de")
  }, {
    $set: {
      name: 'Phil'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  // db.close()
})
