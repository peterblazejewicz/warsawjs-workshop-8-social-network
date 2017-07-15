const esdf = require('esdf');
const bcrypt = require('bcrypt');

class User extends esdf.core.EventSourcedAggregate {

    constructor() {
        super();
        this._email = null;
        this._name = null;
        this._registered = false;
    }

    get registered() {
        return this._registered;
    }

    get password() {
        return this._password;
    }

    async register({name, email, password }) {
        if(this.registered) {
            return;
        };
        const saltRounds = 10;
        let hash = await bcrypt.hash(password, saltRounds);
        this._stageEvent(new esdf.core.Event('Registered', {name, email, hash }));
    }

    onRegistered({eventPayload: payload}) {
        this._registered = true;
        this._name = payload.name;
        this._email = payload.email;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

}

module.exports = User;
