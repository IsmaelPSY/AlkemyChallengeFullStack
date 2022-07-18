const router = require('express').Router()
const http = require('./operations.http')

router
  .route('/')
  .get(
    http.getAllMyOperations
  )
  .post(
    http.postOperation
  );

router
  .route('/:uuid')
  .get(
    http.getOperationById
  )
  .put(
    http.putOperation
  )
  .delete(
    http.deleteOperation
  );


module.exports = {
  router,
};