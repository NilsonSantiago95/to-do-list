const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.set('strictQuery', true)

mongoose.connect('mongodb://0.0.0.0/to-do-list', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.log(error.message))