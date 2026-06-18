const Cat = require('../models/Cat')

exports.addcat = async (req,res)=>{
try{

    console.log(req.body)
    console.log(req.file)

    const cat = await Cat.create({
        name:req.body.name,
        age:req.body.age,
        breed:req.body.breed,
        image:"test.jpg"
    })

    res.status(201).json({
        message:"cat added",
        cat
    })

}catch(err){
    console.log(err)

    res.status(500).json({
        message:err.message
    })
}
}

exports.getall = async (req,res)=>{
try{

    const cat = await Cat.find()

    res.status(200).json({
        message:"Cats",
        cat
    })

}catch(err){
    console.log(err)

    res.status(500).json({
        message:err.message
    })
}
}

exports.getbyid = async (req,res)=>{
try{

    const cat = await Cat.findById(req.params.id)

    res.status(200).json({
        message:"Cat Details",
        cat
    })

}catch(err){
    console.log(err)

    res.status(500).json({
        message:err.message
    })
}
}