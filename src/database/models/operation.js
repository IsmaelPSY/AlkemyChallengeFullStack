const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operation', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    isue: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    transaction_type: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'operation_types',
        key: 'id'
      }
    },
    transaction_category: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'operation_category',
        key: 'id'
      }
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "2022-07-17 12:50:38.198379"
    }
  }, {
    sequelize,
    tableName: 'operation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "operation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
