var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")
const db = require ("../models")
const config = require("../db/auth.config")

const  User = db.user;

exports.signup = (req, res) => {
  const { fullname, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  const user = new User({
    fullname,
    email,
    password: hashedPassword 
  });
  user.save((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: "Error occurred while registering user" });
    } else {
      res.send({ message: "User registered successfully" });
    }
  });
}


exports.signin = (req, res) =>{
    User.findOne({
        email: req.body.email
    })
    .then((user) => {
        if(!user){

            return res.status(404).send({message:"User Not found"})

        }
        var passwordlsVaild = bcrypt.compareSync(
            req.body.password,
            user.password
        )
        if(!passwordlsVaild){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            })
        }

        var token= jwt.sign({
            id:user.id
        }, config.secret,{
            expiresIn: 86400 // 24 hours

        })
        res.status(200).send({
            id: user._id, 
            firstname:user.firstname,
            lastname:user.lastname,
            email: user.email,
            accessToken:token

        })
    })
}