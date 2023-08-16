const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('user list')
})

router.get('/new', (req, res) => {
    res.render('users/new')
})


router.post('/', (req, res) => {
    const isValid = false
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error')
        res.render('users/new', { firstName: req.body.firstName })
    }
})

router
.route('/:id')
.get((req, res) => {
    res.send(`user get id ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Update user get id ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Delete user get id ${req.params.id}`)
})

const users = [ { name: 'gogo' }, { name: 'gogi' }]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router