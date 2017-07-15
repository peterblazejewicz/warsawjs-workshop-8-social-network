const firebase = require('firebase');

module.exports = function() {
    this.requires('config');
    this.provides('firebase', ({ config }) => {
        const firebaseConfig = {
            apiKey: "AIzaSyBgg0o3OhTuaEySs_3gu2DP95jmPk7tn18",
            authDomain: "warsawjs-workshop-8.firebaseapp.com",
            databaseURL: "https://warsawjs-workshop-8.firebaseio.com",
            projectId: "warsawjs-workshop-8",
            storageBucket: "warsawjs-workshop-8.appspot.com",
            messagingSenderId: "897471874142"
          };
          const app = firebase.initializeApp(firebaseConfig);
          const db = app.database();
          return firebase.auth()
            .signInWithEmailAndPassword(config.firebase.email, config.firebase.password)
            .then(() => {
                return db;
            });
    })
}
