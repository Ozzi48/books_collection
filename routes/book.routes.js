const { Router } = require('express')
const Book = require('../models/Book')
const { check, validationResult } = require('express-validator')
const router = Router()


// -> /api/create
router.post('/create',
    [
        //create for all params costum messages (all params should be not empty)
        check('title', 'Title is empty').notEmpty(),
        check('author', 'Author is empty').notEmpty(),
        check('description', 'Description is empty').notEmpty()
    ],
    async (req, res) => {
        try {
            //validate params
            const errors = validationResult(req)
            //if there is error (one of params empty), we create object with one global message and costum errors
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Please, check inputs. They should be not empty'
                })
            }
            const { title, author, description } = req.body
            //try to find book with provided parameters
            const bookExists = await Book.findOne({ title, author, description })
            //if the book exists, send the message about that
            if (bookExists) {
                return res.status(400).json({ message: 'This book already in list. Please modify the book to save new one' })
            }
            //if we cant find the book thats mean we can save to database new one and also print the message that everything is okey
            const book = new Book({ title, author, description })
            await book.save()
            res.status(201).json({ message: 'Book has been added' })
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong, please, try again 2' })
        }
    })

// -> /api/books
router.get('/books', async (req, res) => {
    try {
        //find all books and send them to response
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong, please, try again 1' })
    }
})

// -> /api/remove/id
router.post('/remove/:id', async (req, res) => {
    try {
        //get the id of book and delete this book
        await Book.findByIdAndRemove({'_id': req.params.id})
        res.status(201).json({ message: 'Book has been removed' })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong, please, try again 3' })
    }
})

// -> /api/update/id
router.post('/update/:id',
    [
        check('title', 'Title is empty').notEmpty(),
        check('author', 'Author is empty').notEmpty(),
        check('description', 'Description is empty').notEmpty()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Please, check inputs. They should be not empty'
                })
            }
            const { title, author, description } = req.body
            const bookExists = await Book.findOne({ title, author, description })

            if (bookExists) {
                return res.status(400).json({ message: 'Please, make some changes for book to save it.' })
            }
            //if some some of params are modified update params in the book by id 
            await Book.findOneAndUpdate({'_id': req.params.id}, { title, author, description })
            res.status(201).json({ message: 'Book has been updated' })
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong, please, try again' })
        }
    })

module.exports = router

