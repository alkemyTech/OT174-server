const { Categories } = require('../models/index');


const updateCategoriesById = async(req,res)=>{
    try{

        const categorieToUpdate = await Categories.findOne({where : {id: req.params.id}});

        if(!categorieToUpdate){
            return res.status(404).send('Categorie not found');
        }

        await categorieToUpdate.set(req.body);

        const updatedCategorie = await categorieToUpdate.save();

        return res.status(201).json(updatedCategorie)
        
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}


module.exports = {
    updateCategoriesById
}
