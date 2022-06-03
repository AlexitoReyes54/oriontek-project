const { Sequelize } = require('sequelize');
//const Client = require('./models/client')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DEV_DB
});

async function testDatabaseConection() {
    try {
        await sequelize.authenticate();
        return true;
    } catch (error) {
        return false;
    }
}

async function databaseConection() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force:false,alter:true})
        console.log('Connection has been established successfully.');
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false;
    }
}

//testDatabaseConection()
//databaseConection()

module.exports = { sequelize, testDatabaseConection}