const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');
let presentUser = {};

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        if (presentUser?.id === id) {
            console.log('33333333333333333333');
            return done(null, presentUser);
        }
        console.log('기존 유저:', presentUser);
        User.findOne({ 
            where: {id},
            include: [{
                model: User,
                attributes: ['id', 'nick'],
                as: 'Followers'
            }, {
                model: User,
                attributes: ['id', 'nick'],
                as: 'Followings',
            }],
        })
         .then(user => {
             presentUser = user;
             done(null, user)
         })
         .catch(err => done(err));
    });

    local();
    kakao();
};