const express = require('express');
const helpers = require('./recipes-model');

const router = express.Router();

router.get('/:id',(req, res) => {
    const {id} = req.params;
    helpers.getRecipeById(id)
        .then(recipe => {
            if(!recipe){
                res.status(400).json({message:"recipe with specific id does not exist"})
            }else{
                res.status(200).json(recipe)
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;