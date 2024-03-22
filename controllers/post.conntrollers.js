const db = require ("../models")

const Post = db.post

exports.createPost = (req, res)=>{
    const {content, like} =req.body
    const newpost = new Post ({
        postedBy: req.userId,
        fullname:req.fullname,
        content,
        like

    })
    newpost.save()
    .then(data=>{
        if(!data){
            res.status(500).send({
          message:"Some error occurred while creating the product"
        });
        }
        res.send({message:"Post was created successfully"})
    })

}

exports.updatePost = (req, res)=>{
    const id = req.params.id
    Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data=>{
        if (!data) {
            res.status(404).send({
              message: `Cannot update Post with id=${id}. Maybe Post was not created!`
            });
          } else res.send({ message: "Post was updated successfully." });  
    })
}
