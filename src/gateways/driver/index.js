const DriverRecord = require('../../db/models/driver');
const { sequelize } = require('../../db/connection');
const { v4: uuidv4 } = require('uuid');

class DriverGateway {
    async create({ body }) {
        
        const {name: Name, email} = body;

        const driverModel = new DriverRecord(sequelize);
        const { id, name } = await driverModel.DriverModel.create({
            id: uuidv4(),
            email: email,
            name: Name
        });

        return {
            id, 
            name 
        };
    }
}

module.exports = new DriverGateway();