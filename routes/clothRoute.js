const express = require("express")
const router = express.Router()
const Clothes = require("../models/cloth")

router.get("/", async (req, res) => {
    try{
        const clothes = await Clothes.find()
        res.render("clothesView", {clothes})
    }catch(error) {
        res.status(500).json({message: error.message})
    }
    
});

router.get("/add", (req, res) =>{
    res.render("addClothView")
})

router.post("/add", async(req, res) =>{
    const newBook = new Clothes({
        clothname: req.body.clothname,
        price: req.body.price,
        quantity: req.body.quantity,
        location: req.body.location,
        reviews: req.body.reviews
    })

    await newBook.save()
    res.redirect("/clothes")

})

router.get("/edit/:id", async(req, res) => {
    try{
        const editCloth = await Clothes.findById(req.params.id)
        if(!editCloth)  return res.status(404).send("Not found!")
        res.render("editClothView", {editCloth})
    }catch(error) {
        res.status(500).json({message: error.message})
    }
    
})

router.put("/edit/:id", async(req, res) => {
    try{
        const updatedCloth = await Clothes.findByIdAndUpdate(req.params.id, {
            clothname: req.body.clothname,
            price: req.body.price,
            quantity: req.body.quantity,
            date: new Date(req.body.date),
            location: req.body.location,
            reviews: req.body.reviews
        }, { new: true })

        if (!updatedCloth) return res.status(404).send('Item not found');
        res.redirect("/clothes")
    }catch(error) {
        res.status(500).json({message: error.message})
    }
})

router.delete("/delete/:id", async(req, res) => {
    try{
        const deleteCloth = await Clothes.findByIdAndDelete(req.params.id)
        if(!deleteCloth) return res.status(404).send('Item not found');
        res.redirect("/clothes")
    }catch(error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;