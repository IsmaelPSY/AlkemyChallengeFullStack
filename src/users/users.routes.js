const router = require('express').Router();
const userServices = require('./users.http');
router
    .route('/:uuid')
    .get(
        userServices.getUserById
    )
    .put(
        userServices.updateUser
    )
    .delete(
        userServices.deleteUser
    );

module.exports = {
    router,
};