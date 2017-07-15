const esdf = require('esdf');

module.exports = function() {
  this.requires('sink');
  this.provides('streamer', function({ sink }) {
    const eventStreamer = new esdf.test.DummyEventSinkStreamer(sink);
    return eventStreamer;
  });
};
