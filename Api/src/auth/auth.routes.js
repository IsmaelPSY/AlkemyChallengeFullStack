const router = require('express').Router()
const http = require('./auth.http')

router
  .route('/login')
  .post(
    http.loginUser
  );
router
  .route('/sigin')
  .post(
    http.postUser
  );

module.exports = {
  router,
};