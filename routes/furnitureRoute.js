const express = require("express")
const router = express.Router()

const Furnitures = require("../models/furniture")

router.get("/", async (req, res) => {
    try{
        const furnitures = await Furnitures.find()
        res.render("furnituresView", {furnitures})

    }catch(error) {
        res.status(500).json({message: error.message})
    }
})

router.get("/add", (req, res)=> {
    res.render("addFurnitureView")
})

router.post("/add", async (req, res) => {
    const newFurniture = new Furnitures({
        furniturename: req.body.furniturename,
        price: req.body.price,
        location: req.body.location
    })

    await newFurniture.save()
    res.redirect("/furnitures")
})

router.get("/edit/:id",async(req,res) => {
    try{
        const editFurniture = await Furnitures.findById(req.params.id)
        if(!editFurniture) return res.status(404).send("Not found!")
        res.render("editFurnitureView", {editFurniture})
    }catch(error){
        res.status(500).json({message: error.message})
    }
    
})

router.put("/edit/:id", async(req, res) =>{
    try{
        const updatedFurniture = await Furnitures.findByIdAndUpdate(req.params.id, {
            furniturename: req.body.furniturename,
            price: req.body.price,
            location: req.body.location,
            date: new Date(req.body.date)
        })
        if(!updatedFurniture) return res.status(404).send("Not found!")
        res.redirect("/furnitures")

    }catch(error) {
        res.status(500).json({message: error.message})
    }
})

router.delete("/delete/:id", async(req,res) => {
    try{
        const deleteFurniture = await Furnitures.findByIdAndDelete(req.params.id)
        if(!deleteFurniture) return res.status(404).send("Not found!")
        res.redirect("/furnitures")
    }catch(error){
        res.status(500).json({message: error.message})
    }
})



module.exports = router