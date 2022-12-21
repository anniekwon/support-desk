const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controllers/userController')

router.post('/', (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        //return res.status(400).json({ message: 'Please include all fields' })
        throw new Error('Please include all fields.')
    }

    res.send('Register Route')
})

router.post('/login', (req, res) => {
    res.send('Login Route')
})

module.exports = router