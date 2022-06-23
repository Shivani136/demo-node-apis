const db = require("../models");
const multer = require('multer');
const Tutorial = db.tutorials;


// Create and Save a new Tutorial
exports.create =async (req, res) => {

    const Upload = multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, "uploads")
            },
            filename: function (req, file, cb) {
                cb(null, file.fieldname + "-" + Date.now() + ".jpeg")
            }
    
        })
    }).single("user_file");
    
    let datas = new ProductModel(req.body);
    let result = await datas.save();
    console.log(req.body)
    res.send({
        "message":"user added Successfully",
        result : result
    })


   
    // const tutorial = new Tutorial({
    //   title: req.body.title,
    //   description: req.body.description,
    //   published: req.body.published ? req.body.published : false
    // });
    // // Save Tutorial in the database
    // tutorial.save(tutorial) .then(data => { res.send(data);
    //   })
    //   .catch(err => {
    //     res.status(500).send({
    //       message: err.message || "Some error occurred while creating the Tutorial."
    //     });
    //   });
  };
