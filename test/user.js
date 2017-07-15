// user
const User = require('../app/Entities/User.js');
const assert = require('assert');

describe('User', () => {
    describe('#constructor', () => {
        it('registered returns false for new user', () => {
            const user = new User();
            assert.equal(user.registered, false);
            assert.equal(user.email, null);
            assert.equal(user.name, null);
        });

        it('registetered returns true for duplicate calls', async () => {
            const user = new User();
            await user.register({
                name: 'Piotr',
                email: 'piotr@example.com',
                password: '#Password$'
            });
            assert.equal(user.getStagedEvents().length, 1);
        })
    });

    describe('methods', () => {
        it('register changes user registered status', async () => {
            const user = new User();
            await user.register({
                name: 'Piotr',
                email: 'piotr@example.com',
                password: '#Password$'
            });
            assert.equal(user.registered, true);
            assert.equal(user.name, 'Piotr');
            assert.equal(user.email, 'piotr@example.com');
        });

    })
});