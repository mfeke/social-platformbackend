const db = require("../models")

const Post = db.post

const imageUpload = require("../controllers/image")

exports.createPost = async (req, res) => {

    // Check if a file was sent in the request
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    return console.log(req.file)
     const imageLocation = await imageUpload.UploadImage(req.file)
     console.log(imageLocation.Location)
      const newpost = new Post ({
      postedBy: req.userId,
      fullname:req.fullname,
      text:req.body.text,
      image: String(imageLocation.Location),
  })
  newpost.save()
  .then(data=>{
      if(!data){
          res.status(500).send({
        message:"Some error occurred while creating the post"
      });
      }
      res.send({message:"Post was created successfully"})
  })


}

exports.updatePost = (req, res) => {
  const id = req.params.id
  Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Post with id=${id}. Maybe Post was not created!`
        });
      } else res.send({ message: "Post was updated successfully." });
    })
}

exports.findAllPost = (req, res)=>{
  Post.find()
  .then(data=>{
    if(!data){
      res.send(500)({message:"There are post"})
    }
    res.send(data)
  })
}
