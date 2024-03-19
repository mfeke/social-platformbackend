const db = require("../models")

const User = db.user

const checkDuplicateUsernameOrEmail = (req, res ,next) =>{

    User.findOne({
        email:req.body.email
    }).then((user) =>{
        if (err){
            res.status(500).send({message:err})
            return
        }
        if (user){
            res.status(400).send({message:"Failed Email is already in use!"})
            return
        }

        next()
    })

}


const verifySignUp = {
    checkDuplicateUsernameOrEmail, 
    
};
module.exports = verifySignUp;