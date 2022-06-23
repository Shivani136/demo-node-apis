module.exports = app => {

    const tutorials = require("../Controllers/usercontroller.js");
    const datas = require("../Controllers/CategoryController.js");

    var router = require("express").Router();

    router.post("/", tutorials.create);

    router.get("/", tutorials.findAll);

    router.get("/published", tutorials.findAllPublished);

    router.get("/:id", tutorials.findOne);

    router.put("/:id", tutorials.update);

    router.delete("/:id", tutorials.delete);

    router.delete("/", tutorials.deleteAll);


    router.post("/", datas.create);

    app.use('/api/tutorials', router);


};


//2nd method 

  // app.post('/api/createusers',Users.createUser);
    // app.post('/api/signin',Users.signin)
    // app.get('/api/users/getuserslist',Users.getAllUsers);
    // app.put('/api/users/updateuser',authJwt.verfiyToken,Users.updateUser)
    // app.delete('/api/users/deleteuser',authJwt.verfiyToken,Users.deleteUser)

