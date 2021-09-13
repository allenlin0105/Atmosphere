const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    define: {
        timestamps: false
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.records = require("./record.model")(sequelize, Sequelize);

module.exports = db;