const DriverRecord = require('../../db/models/driver');
const { sequelize } = require('../../db/connection');
const { v4: uuidv4 } = require('uuid');

class DriverGateway {
    async create({ body }) {
        const {name: Name, email} = body;
        try {
            const driverModel = new DriverRecord(sequelize);
            const { id, name } = await driverModel.DriverModel.create({
                id: uuidv4(),
                email: email,
                name: Name
            });

            return {
                driver: {
                    id, 
                    name 
                },
                status: 200
            };

        }catch (error) {
            console.error('Erro ao criar registro de motorista:', error);
    
            return { 
                driver: 'Erro ao criar registro de motorista',
                status: 500
            };

        }
    }
}

module.exports = new DriverGateway();