const compositor = require('app-compositor');
const uuid = require('uuid');
const firebase = require('firebase');
const modules = [
    require('./app/Modules/sink'), 
    require('./app/Modules/streamer'), 
    require('./app/Modules/repository'), 
    require('./app/Modules/services' ), 
    require('./app/Modules/streamer'), 
    require('./app/Modules/subscriber'), 
    require('./app/Modules/publisher'),
    require('./app/Modules/firebase'),
    require('./app/Modules/firebaseBuilder')
]

const db = function () {
    this.reqires('connectionURL');
    this.provides('db', (connectionURL) => {
        return new SomeDBImplementation(connectionURL);
    });
}

const app = new compositor.CompositionManager();
app
    .runModules(modules)
    .done(async({streamer, subscriber, services}) => {
        streamer.start();
        subscriber.queue('eventLogger').bind('*.*').listen(({event, commit}) => {
            console.log('* %s %s %j', commit.aggregateType, event.eventType, event.eventPayload);
        });
        const guid = uuid();
        const registerUser = services.service('registerUser');
        await registerUser({userID: guid, name: 'Piotr', email: 'piotr@example.com', password: 'pass4'});
    });
