const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class User extends Model { }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            balance: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "User",
            tableName: "Users",
            timestamps: true,
        }
    );

    return User;
};
