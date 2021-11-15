const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

require('dotenv').config();

const app = express()

//allow for rich objects and arrays to be encoded into the URL-encoded format
app.use(express.json({ extended: true }))

app.use(cors())

//register the route and add prefix api
app.use('/api/', require('./routes/book.routes'))


const PORT = process.env.PORT || 8083;

app.listen(PORT, () => console.log(`App has been started on ${PORT}`))

async function start() {
    try {
        //MongoDB connection
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log('Server error', error.message)
        process.exit(1)
    }
}

start()
