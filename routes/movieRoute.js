const express = request ("express")
const router = express.Router();

router.get("/hello", (req,res) => {
res.json({message: "got get from browser"})

})