const esdf = require('esdf');

module.exports = function() {
  this.requires('sink');
  this.provides('repository', function({ sink }) {
    const loader = esdf.utils.createAggregateLoader(sink);
    const repository = new esdf.utils.Repository(loader);
    return repository;
  });
};
