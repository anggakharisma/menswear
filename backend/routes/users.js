const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const passport = require('passport');
require('../config/passport')(passport);

const User = require('../app/model/User');

router.route('/signup')
    .post((req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(500).json({ success: false, message: "Please fill the email or the password" });
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin || false
        });

        user.save(function (err) {
            if (err) return res.status(500).json({ success: false, message: "Signup failed" });
            res.json({ success: true, message: "Signup complete" });
        });
    });

router.post('/signin', (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(500).json({ success: false, message: "Please fill the email or the password" });
    }
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user || err) {
            res.status(401).json({ success: false, message: "Authentication failed, User not found" });
        } else {
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    const token = jwt.sign(user.toJSON(), process.env.secret, { expiresIn: '24h' });
                    res.status(200).json({ success: true, token: 'JWT ' + token, message: "Login success" });
                } else {
                    res.status(401).json({ success: false, message: "Wrong password or email" });
                }
            });
        }
    })
});

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};


router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    let token = getToken(req.headers);
    if (token) {
        const decode = jwt.verify(token, process.env.secret);
        User.findById(decode._id, { password: 0 }, (err, user) => {
            if (err) res.status(500).json({ message: "No user found." });
            res.status(200).json(user);
        });

    } else {
        return res.status(401).json({ success: false, msg: 'Unauthorized.' });
    }
});



module.exports = router;