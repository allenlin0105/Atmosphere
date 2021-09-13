module.exports = (sequelize, Sequelize) => {
    const Record = sequelize.define("Record", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        },
        time: {
            type: Sequelize.INTEGER
        }
    });

    return Record;
}