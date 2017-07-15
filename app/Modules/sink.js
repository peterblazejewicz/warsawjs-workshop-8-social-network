const esdf = require('esdf');

module.exports = function() {
  this.provides('sink', function() {
    const eventSink = new esdf.test.DummyEventSink();
    return eventSink;
  });
};