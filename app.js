const compositor = require('app-compositor');
const uuid = require('uuid');

const modules = [
    require('./app/Modules/sink'),
    require('./app/Modules/streamer'),
    require('./app/Modules/repository'),
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
    .done(async ({repository}) => {
        const User = require('./app/Entities/User');
        const guid = uuid();
        await repository.invoke(
            User,
            guid,
            async (user) => {
                await user.register({
                    name: 'Piotr',
                    email: 'piotr@example.com',
                    password: 'pass4'
                });
                console.log(`is registered %s`, user.registered);
            }
        );
        await repository.invoke(
            User,
            guid,
            async (user) => {
                console.log(`is registered %s`, user.registered);
            }
        );
    }

    );
