
module.exports = function(sequelize, DataTypes) {
    const Client = sequelize.define('Client', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        vat_number: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        province: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'clients',
        underscored: true,
        classMethods: {
            associate: function (models) {
                Client.belongsTo(models.User, { foreignKey: { allowNull: false } });
            }
        }
    });
    return Client;
};
