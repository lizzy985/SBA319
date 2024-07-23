const express = require("express");
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const app = express();
app.use(methodOverride('_method'))


require("dotenv").config()
const port = process.env.PORT || 3000

const conn = require("./db/conn")
conn()

const path = require("path")
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const clothesRouter = require("./routes/clothRoute")
const usersRouter = require("./routes/userRoute")
const booksRouter = require("./routes/bookRoute")
const furnitureRouter = require("./routes/furnitureRoute")
app.use("/clothes", clothesRouter)
app.use("/users", usersRouter)
app.use("/books", booksRouter)
app.use("/furnitures", furnitureRouter)

app.get("/", (req, res)=> {
    res.render("index")
})



app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})