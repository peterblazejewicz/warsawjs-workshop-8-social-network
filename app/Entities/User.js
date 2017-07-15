class User {

    constructor() {
        this._email = null;
        this._name = null;
        this._registered = false;
    }

    get registered() {
        return this._registered;
    }

    register({name, email}) {
        this._registered = true;
        this._name = name;
        this._email = email;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

}

module.exports = User;
