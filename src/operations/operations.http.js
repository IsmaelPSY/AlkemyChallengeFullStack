const controllers = require('./operations.controller')
const { toPromise } = require('../utils/toPromise')

const getAllMyOperations = async (req,res) => {
  const { user } = req.query
  const [operations,err] = await toPromise(controllers.getAllMyOperations(user))
  if(err){ 
    return res.status(400).json({message: 'Error'})
}
  res.status(200).json(operations)
}

const getOperationById = async (req,res) => {
    const id = req.params.uuid;
  const [operation , err ] = await toPromise(controllers.getOperationById(id)) 
  if(err){ 
    return res.status(400).json({message: 'Error'})
  }
  return res.status(200).json(operation)
}

const postOperation = async (req,res) => {
  const [newOperation,err] = await toPromise(controllers.registerOperation(req.body))
  if(err){ 
    return res.status(400).json({message: 'Error'})
  }
  return res.status(201).json(newOperation)
}

const putOperation = async (req,res) => {
  const [operation,err] = await toPromise(controllers.putOperation(req.body, req.params.uuid))
  if(err){ 
    return res.status(400).json({message: 'Error'})
  }
  return res.status(200).json(operation)
}

const deleteOperation = async (req,res) => {
  const [operation,err] = await toPromise(controllers.deleteOperation(req.params.uuid))
  if(err){ 
    return res.status(400).json({message: 'Error'})
  }
    res.status(202).json({message: 'Conversation delete succesfully'})
}

module.exports = {
  getAllMyOperations,
  getOperationById,
  postOperation,
  putOperation,
  deleteOperation
}