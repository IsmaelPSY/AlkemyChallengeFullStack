const sequelize = require('../database/models/index').sequelize;
const initModels = require('../database/models/init-models');
const uuid = require('uuid');
const models = initModels(sequelize);

const registerOperation = async (data)=>{
  const operation_id = uuid.v4();
  const newOperation = await models.operation.create({
    id : operation_id,
    ...data
  });
  return {
    message: `Operation created succesfully with the id: ${operation_id}`,
    operation: newOperation,
  }
}

const getAllMyOperations = async (user_id) => {
  const operations = await models.operation.findAll({
    where: {
      user_id
    },
  })
  return operations
}

const getOperationById = async (id) => {
  const operation = await models.operation.findOne({
    where: {
      id
    },
    include : [
      {
        model: models.users,
        as: 'user',
        atributes: {
        }
      }
    ]
  })
  return operation
}

const deleteOperation = async (id) => {
  const operation = await models.operation.destroy({
    where: {
        id,
    },
});
return {
    message: `Operation with id: ${id} deleted succesfully.`,
    operation: operation,
};
}

const putOperation= async (data,id) => {
  const operation = await models.operation.update(data, {
      where: {
          id,
      },
  });
  return {
      message: `Operation with id: ${id} eddited succesfully.`,
      operation: operation,
  };
};

// registerOperation({
//   'isue': 'Este es el asunto',
//   'amount' : 100,
//   'transaction_type' : '3455a378-c257-49eb-8c00-7a5896b037bc',
//   'transaction_category': '24a9dfee-454a-4e39-bd4f-f711f994f632',
// },'93004353-4d57-4b39-9648-c023eca22f4a')

// getMyAllOperations('93004353-4d57-4b39-9648-c023eca22f4a')
// deleteOperation('2066f653-a6bf-4317-b4be-6f01450347f1')

// putOperation('2066f653-a6bf-4317-b4be-6f01450347f1',{
//   'isue': 'Este es el asunto 2',
//   'amount' : 100,
//   'transaction_category': '29a17452-9411-438d-8195-d45273ad78e0',
// })

module.exports = {
  registerOperation,
  getAllMyOperations,
  deleteOperation,
  putOperation,
  getOperationById
}