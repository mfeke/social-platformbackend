const fileUpload = require('express-fileupload')
const fs = require("fs")
const AWS = require('aws-sdk');
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
require("dotenv").config();


exports.UploadImage = async (fileImage) => {
 
    AWS.config.update({
        accessKeyId: process.env.AWS_AKEY,
        secretAccessKey: process.env.AWS_SKEY,
        region: process.env.AWS_REGION
    })

    const s3 = new AWS.S3();

    const fileContent = Buffer.from(fileImage.buffer, "Binary");

    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: fileImage.originalname,
        Body: fileContent
    }

   return await s3.upload(params).promise()
}

// AWS.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION
//   });
//   const s3 = new AWS.S3();



// exports.uploadImage = (image) => {
//     const fileName = image.originalname
// const filePath = '/path/to/your/local/file/' + fileName; // Specify the path to your file
// const fileContent = fs.readFileSync(filePath);
// const uploadParams = {
//     Bucket: process.env.BUCKET_NAME,
//     Key: fileName, // Set the filename as the key
//     Body: fileContent
//   };
  
//   s3.upload(uploadParams, (err, data) => {
//     if (err) {
//       console.error("Error uploading file:", err);
//     } else {
//       console.log("File uploaded successfully. S3 location:", data.Location);
//     }
//   });

// }
