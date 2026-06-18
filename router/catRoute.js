const {addcat,getall,getbyid} = require('../controller/catController')
const express = require("express")
const router = express.Router()

const multer = require("multer")
const auth = require('../middleware/authmiddleware')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + "-"+ file.originalname)
    }
})

const upload = multer({
    storage
})
router.post(
    "/add/cat",
    upload.single("image"),
    (req,res,next)=>{
        console.log("BODY =", req.body)
        console.log("FILE =", req.file)
        next()
    },
    addcat
)

router.post("/add/cat",upload.single("image"),addcat)

router.get("/get/cats",auth,getall)

router.get("/get/cats/:id",getbyid)

module.exports = router