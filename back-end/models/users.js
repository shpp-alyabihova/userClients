const crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true,
          notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_reset_token: {
        type: DataTypes.STRING,
        defaultValue: null,
        unique: true
    },
    password_reset_at: {
      type: DataTypes.DATE,
      defaultValue: null
    }
  }, {
    tableName: 'users',
    underscored: true,
    classMethods: {
        associate: function(models) {
            User.hasMany(models.Client, { onDelete: 'CASCADE' });
        }
    },
    setterMethods: {
        password_reset_token: function (salt) {
            this.setDataValue('password_reset_token', salt ? crypto.createHmac('sha256', salt).digest('hex') : null);
        },
        password: function (data) {
            this.setDataValue('password', crypto.createHash('sha256').update(data).digest('hex'));
        }
    },
  });
  return User;
};
