// require modules
const User = require('../models/user');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

// handle exports
module.exports = {
    signup
};

// define singup controller action
async function signup(req, res) {
    try {
        const user = await User.create(req.body);

        const token = createJWT(user);

        res.json({ token });
        
    } catch (error) {
        res.status(400).json({ msg: 'bad request' });
    }
}

function createJWT(user) {
    return jwt.sign({ user }, SECRET, {expiresIn: '24h'})
}