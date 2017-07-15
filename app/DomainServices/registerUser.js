const User = require('../Entities/User');

module.exports =  async function registerUser( {repository, config } , params) {
        return await repository.invoke(
            User,
            params.userID,
            async (user) => {
                await user.register(params, { config });
            });    
        };
