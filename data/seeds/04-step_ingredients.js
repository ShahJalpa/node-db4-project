
exports.seed = function(knex) {
  return knex('step_ingredients').insert([
    { step_id: 1, ingredient_id: 7, quantity: "1 cup" },
    { step_id: 1, ingredient_id: 9, quantity: "1 teaspoon" },
    { step_id: 1, ingredient_id: 10, quantity: "1/4 teaspoon" },
    { step_id: 2, ingredient_id: 1, quantity: "1 cup" },
    { step_id: 4, ingredient_id: 6, quantity: "1/2 teaspoon" },
    { step_id: 4, ingredient_id: 8, quantity: "1 tablespoon" },
    { step_id: 1, ingredient_id: 1, quantity: "1 cup" },
    { step_id: 1, ingredient_id: 3, quantity: "1/2 cup" }
  ])
};
