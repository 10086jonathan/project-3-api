// require modules
const User = require('../models/user');

// handle exports
module.exports = {
    signup
};

// define singup controller action
async function signup(req, res) {
    try {
        const user = await User.create(req.body);
        res.json({ user });
    } catch (error) {
        res.status(400).json({ msg: 'bad request' });
    }
}
    // create user the send the user document as json
