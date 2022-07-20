var DataTypes = require("sequelize").DataTypes;
var _operation = require("./operation");
var _operation_category = require("./operation_category");
var _operation_types = require("./operation_types");
var _users = require("./users");

function initModels(sequelize) {
  var operation = _operation(sequelize, DataTypes);
  var operation_category = _operation_category(sequelize, DataTypes);
  var operation_types = _operation_types(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  operation.belongsTo(operation_category, { as: "transaction_category_operation_category", foreignKey: "transaction_category"});
  operation_category.hasMany(operation, { as: "operations", foreignKey: "transaction_category"});
  operation.belongsTo(operation_types, { as: "transaction_type_operation_type", foreignKey: "transaction_type"});
  operation_types.hasMany(operation, { as: "operations", foreignKey: "transaction_type"});
  operation.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(operation, { as: "operations", foreignKey: "user_id"});

  return {
    operation,
    operation_category,
    operation_types,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
