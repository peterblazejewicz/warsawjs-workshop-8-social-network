module.exports = function() {
    this.provides('config', () => {
      return {
        passwordCost: 12,
        tokenSecret: process.env.TOKEN_SECRET || 'aspect3Box_Chat',
        firebase: {
          email: process.env.FIREBASE_EMAIL,
          password: process.env.FIREBASE_PASSWORD
        }
      };
    });
  };
