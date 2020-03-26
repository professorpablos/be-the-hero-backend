
exports.up = function(knex) {
    return knex.schema.renameTable('indidents', 'incidents')
};

exports.down = function(knex) {
  
};
