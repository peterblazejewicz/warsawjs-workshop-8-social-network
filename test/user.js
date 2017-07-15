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
    });
    describe('methods', () => {


        it('register changes user registered status', () => {
            const user = new User();
            user.register({
                name: 'Piotr',
                email: 'piotr@example.com'
            });
            assert.equal(user.registered, true);
            assert.equal(user.name, 'Piotr');
            assert.equal(user.email, 'piotr@example.com');
        });

    })
});