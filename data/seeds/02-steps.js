
exports.seed = function(knex) {
  return knex('steps').insert([
    {
      step_number: 1,
      step_instruction: 'In a large saucepan add milk, sugars, vanilla and salt and bring to a boil over medium heat.',
      recipe_id: 1
    },
    {
      step_number: 2,
      step_instruction: 'Stir in oats, return to a boil and continue to cook, stirring occasionally for 3-5 minutes until oatmeal begins to thicken',
      recipe_id: 1
    },
    {
      step_number: 3,
      step_instruction: 'Cover and remove from heat. Let sit for about 3 minutes',
      recipe_id: 1
    },
    {
      step_number: 4,
      step_instruction: 'In a small bowl mix butter, brown sugar and cinnamon until combined',
      recipe_id: 1
    },
    {
      step_number: 5,
      step_instruction: 'Serve warm.',
      recipe_id: 1
    },
    {
      step_number: 1,
      step_instruction: 'Add oatmeal, water, 1/2 cup peaches, 1/4 cup blueberries, vanilla and cinnamon into a small saucepan.',
      recipe_id: 2
    },
    {
      step_number: 2,
      step_instruction: 'Cook over medium heat for 5-10 minutes or until oatmeal has thickened and is the consistency you like.',
      recipe_id: 2 
    },
    {
      step_number: 3,
      step_instruction: 'Spoon into a serving bowl. Top with remaining peaches, blueberries, ground flaxseed and nut butter. Enjoy!',
      recipe_id: 2 
    }
  ])
};
