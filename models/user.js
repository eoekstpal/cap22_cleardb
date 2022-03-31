module.exports = function(sequelize, DataTypes){
    const user = sequelize.define("user", {
        uid: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
            allowNull: false
        },
        pw: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        charset:"utf8",
        collate: "utf8_general_ci",
        underscored: true,
        freezeTableName: true,
        tableName: "cap_table"
    });
    user.associate = (models) => {
    }
    return user;
}