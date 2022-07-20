const router = require('express').Router()
const http = require('./operations.http')
const passport = require('passport');
require('../utils/auth')(passport);

router
  .route('/')
  .get(
        passport.authenticate('jwt',{ session: false }),
        http.getAllMyOperations //getting all operations by user id
  )
  .post(
        passport.authenticate('jwt',{ session: false }),
        http.postOperation
  );


router
  .route('/:uuid')
  .get(
        passport.authenticate('jwt',{ session: false }),
        http.getOperationById //geting operation by its id
  )
  .put(
        passport.authenticate('jwt',{ session: false }),
        http.putOperation
  )
  .delete(
        passport.authenticate('jwt',{ session: false }),
        http.deleteOperation
  );


module.exports = {
  router,
};