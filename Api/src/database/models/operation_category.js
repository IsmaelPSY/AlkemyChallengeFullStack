const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operation_category', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'operation_category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "operation_category_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
