
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {recipe_name: 'Cinnamon Roll Oatmeal'},
    {recipe_name: 'Blueberry Peach Oatmeal'}
  ]);
};
