const express=require("express");
const app = express();
const bodyParser=require("body-parser");
const connection=require("./database/database");

const categoriesController =require("./categories/CategoriesController");

app.set("view engine","ejs");
app.use(express.static("./public"));


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

connection
                  .authenticate()
                  .then(()=>{
                                    console.log("Conexao feita com sucesso!")
                  }).catch((error)=>{
                                    console.log(error)
                  });



app.use("/",categoriesController)


app.get("/",(req,res)=>{
                  res.render("index")
})
app.listen(3030,()=>{
                  console.log("Oba ta rodando!")
})