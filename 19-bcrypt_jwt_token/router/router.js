let express = require('express')
let UserCollection = require('../model/user_collection')
let bcrypt = require('bcryptjs')

let userRouter = express.Router()

userRouter.get('/user', async (req, res) => {
  try {
    let email = req.body.email
    let password = req.body.password

    //finding userEmail, Exist or not
    let user = await UserCollection.findOne({ email: email })

    //if exist
    //compare userEnteredPass to userPaas
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      //generating userToken
      let token = await user.generateAuthToken()
      res.status(201).send(token)
    } else {
      res.status(400).send('invalid password')
    }
  } catch (e) {
    res.status(400).send('Invalid login details')
  }
})

userRouter.post('/user', async (req, res) => {
  try {
    if (req.body.password === req.body.confirmPassword) {
      let UserRegister = new UserCollection({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        age: req.body.age,
        phone: req.body.phone,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
      })
      let token = await UserRegister.generateAuthToken()
      console.log(UserRegister)
      let userRegisterd = await UserRegister.save()
      console.log(userRegisterd)
      res.cookie('jwt', token)
      return res.status(201).send(token)
    } else {
      return res.status(400).send('Passwords are not matching')
    }
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = userRouter
