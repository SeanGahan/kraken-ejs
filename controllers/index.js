'use strict';


var IndexModel = require('../models/index'),
    ProfileModel = require('../models/profile'),
    AdminModel = require('../models/admin'),
    auth = require('../lib/auth');


module.exports = function (router) {

    var indexmodel = new IndexModel();
    var profilemodel = new ProfileModel();
    var adminmodel = new AdminModel();


    router.get('/', function (req, res) {
            res.render('index', {
            indexmodel: indexmodel,
            profilemodel: profilemodel,
            auth: auth
        });
    });//router.get


    router.get('/profile', function(req, res) {
        res.render('profile', {
        indexmodel: indexmodel,
        profilemodel: profilemodel,
        auth: auth
    });
    })


    router.get('/admin', function(req, res) {
        res.render('admin', {
        indexmodel: indexmodel,
        profilemodel: profilemodel,
        auth: auth,
        adminmodel:adminmodel
    });
    });

    router.get('/login', function (req, res) {
        res.render('login', {
        indexmodel: indexmodel,
        profilemodel: profilemodel,
        auth: auth
    });
    });//router.get login

    /**
     * Allow the users to log out
     */
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });    

};
