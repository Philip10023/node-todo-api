const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')


// Todo.remove({}).then((results) => {
//   console.log(result)
// })



//
Todo.findByIdAndRemove('59e0cc4a55a29b82cdf89ad9').then((todo) => {
  console.log(todo)
})

Todo.findOneAndRemove({_id: '59e0cc4a55a29b82cdf89ad9'}).then((todo) => {
  
})
