const router = require('express').Router()
const http = require('./operations.http')

router
  .route('/')
  .get(
    http.getAllMyOperations //getting all operations by user id
  )
  .post(
    http.postOperation
  );


router
  .route('/:uuid')
  .get(
    http.getOperationById //geting operation by its id
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