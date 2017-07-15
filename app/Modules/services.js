const esdf = require('esdf');
const registerUser = require('../DomainServices/registerUser');


module.exports = function() {
    this.requires('repository');
    this.provides('services', ({ repository }) => {
        const serviceContainer = new esdf.services.ServiceContainer();
        serviceContainer.addResource('repository', repository);
        serviceContainer.addService('registerUser', registerUser);
        return serviceContainer;
    });
}
