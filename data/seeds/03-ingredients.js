
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name:'old fashioned oatmeal' },
    { ingredient_name:'water' },
    { ingredient_name:'fresh peaches, chopped into small chunks and divided' },
    { ingredient_name:'fresh blueberries, divided' },
    { ingredient_name:'almond butter' },
    { ingredient_name:'cinnamon' },
    { ingredient_name:'milk' },
    { ingredient_name:'brown sugar' },
    { ingredient_name:'vanilla extract' },
    { ingredient_name:'salt' }
  ])
};
