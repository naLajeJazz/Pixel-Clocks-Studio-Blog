const express = require("express");
const router = express.Router(); 

router.get("/articles",(req,res)=>{
                  res.send("Rota articles")
});
router.get("/admin/articles",(req,res)=>{
                  res.send("admin articles")
});

module.exports = router;