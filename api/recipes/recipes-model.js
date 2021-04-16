const db = require('../../data/db-config.js');

async function getRecipeById(id){
    const recipe = await db('recipes').where({recipe_id: id}).first()
    const steps = await db('step_ingredients as si')
            .join('steps as s', 's.step_id', 'si.step_id')
            .join('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
            .select('s.step_id', 's.step_number', 's.step_instruction', 'i.ingredient_name')

            return ({
                ...recipe, 
                steps:[...steps]
            })
        }
    
        module.exports = {getRecipeById};