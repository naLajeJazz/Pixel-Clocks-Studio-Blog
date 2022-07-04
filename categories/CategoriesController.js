const express = require("express");
const router = express.Router(); 

router.get("/categories",(req,res)=>{
                  res.send("Rota categoria")
});
router.get("/admin",(req,res)=>{
                  res.send("admin")
});

module.exports = router;