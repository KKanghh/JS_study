const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Good, Auction, User } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get('/', async (req, res, next) => {
    try {
        const goods = await Good.findAll({ where: { SoldId: null } });
        res.render('main', {
            title: 'NodeAuction',
            goods,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/join', isNotLoggedIn, (req, res) => {
    res.render('join', {
        title: '회원가입 - NodeAuction',
    });
});

router.get('/good', isLoggedIn, (req, res) => {
    res.render('good', { title: '상품 등록 - NodeAuction' });
});

module.exports = router;