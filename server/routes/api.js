const express = require('express');
const User = require('./models/User');
const routes = express.Router();

routes.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    return res.json(user);
});

module.exports = routes;