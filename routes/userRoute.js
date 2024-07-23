const express = require("express")
const router = express.Router()
const Users = require("../models/user")

router.get("/", async (req, res) => {
    try{
        const users = await Users.find()
        res.render("usersView", {users})
    }catch(error) {
        res.status(500).json({message: error.message})
    }
    
});

router.get("/add", (req, res) => {
    res.render("addUserView")
})

router.post("/add", async (req,res) => {
    try{
        const newUser = new Users({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        await newUser.save()
        if(!newUser) return res.status(500).send("User already exists")
        res.redirect("/users")

    }catch(error) {
        res.status(500).json({message: error.message})
    }
})

router.get("/edit/:id", async (req, res) => {
    try{
        const editUser = await Users.findById(req.params.id);
        if(!editUser) return res.status(404).send("Not found!")
        res.render("editUserView", {editUser})
    }catch(error){
        res.status(500).json({message: error.message})
    }
   
})

router.put("/edit/:id", async (req, res) => {
    try{
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        if(!updatedUser) return res.status(404).send("Not found!")
        res.redirect("/users")

    }catch(error){
        res.status(500).json({message: error.message})
    }
})

router.delete("/delete/:id", async(req, res) => {
    try{
        const deleteUser = await Users.findByIdAndDelete(req.params.id)
        if(!deleteUser) return res.status(404).send("Not found!")
        res.redirect("/users")
    }catch(error){
        res.status(500).json({message: error.message})
    }
})



module.exports = router;