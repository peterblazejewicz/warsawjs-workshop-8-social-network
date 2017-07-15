const esdf = require('esdf');

module.exports = function() {
    this.requires('publisher');
    this.provides('subscriber', ({publisher}) => {
        const subscriber = new esdf.test.DummyEventBusSubscriber(publisher);
        return subscriber;
    });
}
