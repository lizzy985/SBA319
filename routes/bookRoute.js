const express = require("express")
const router = express.Router()
const Books = require("../models/book")

router.get("/", async (req, res) => {
    try{
        const books = await Books.find()
        res.render("booksView", {books})
    }catch(error) {
        res.status(500).json({message: error.message})
    }
    
});

router.get("/add", (req, res)=> {
    res.render("addBookView")
})

router.post("/add", async (req, res)=>{
    try{
        const addBook = new Books({
            bookname: req.body.bookname,
            price: req.body.price,
            location: req.body.location,
            comment: req.body.comment
        })
        await addBook.save()
        res.redirect("/books")
    }catch(error){
        res.status(500).send({message: error.message})
    }
    
})

router.get("/edit/:id", async(req, res)=>{
    try{
        const editBook = await Books.findById(req.params.id)
        if(!editBook) return res.status(404).send("Not found")
        res.render("editBookView", {editBook})
    }catch(error){
        res.status(500).send({message: error.message})
    }
})

router.put("/edit/:id", async(req, res)=>{
    try{
        const updatedBook = await Books.findByIdAndUpdate(req.params.id, {
            bookname: req.body.bookname,
            price: req.body.price,
            date: new Date(req.body.date),
            location: req.body.location,
            comment: req.body.comment
        })
        if(!updatedBook) return res.status(404).send("Not found!")
        res.redirect("/books")

    }catch(error){
        res.status(500).jaon({message: error.message})
    }
})

router.delete("/delete/:id", async (req,res)=> {
    try{
        const deleteBook = await Books.findByIdAndDelete(req.params.id)
        if(!deleteBook) return res.status(404).send("Not found")
        res.redirect("/books")

    }catch(error){
        res.status(500).jaon({message: error.message})
    }
})

module.exports = router;