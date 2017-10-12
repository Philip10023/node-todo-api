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

  // deleteMany
  // delete every text object that has the same text as eat lunch
  // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result)
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // })

  // just practice!
  var success = () => {

    db.collection('Users').deleteMany({name: 'Phil'}).then((result) => {
      console.log(result)
    })

    db.collection('Users').deleteOne({ _id: new ObjectID('59dcf526efa278609b6e8739')}).then((result) => {
      console.log(result)
    })
  }
  console.log(success())
  // db.close()
})
