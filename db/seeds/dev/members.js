
exports.seed = function(knex) {
  return knex('attendees').del()
    .then(() => knex('books').del())
    .then(() => knex('events').del())
    .then(() => knex('members').del())
    .then(() => {
      return Promise.all([
        knex('members').insert({
          
        })
      ])
      
    });
};
