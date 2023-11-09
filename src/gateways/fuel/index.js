const FuelRecord = require('../../db/models/fuelrecord');
const { sequelize } = require('../../db/connection');
const { literal } = require('sequelize');

class FuelGateway {

    async read({ query }) {
        const { id, date } = query;

        try {
            const fuelRecordModel = new FuelRecord(sequelize);
            const options = {
                where: {
                    driverId: id,
                },
            };

            if (date) options.where.createdAt = literal(`DATE(createdAt) = '${date}'`);

            const fuelRecords = await fuelRecordModel.FuelRecordModel.findAll(options);
            
            return {
                fuel: fuelRecords,
                status: 200
            };

        } catch (error) {
            console.error('Erro ao buscar registros de combustível:', error);
    
            return { 
                fuel: 'Erro ao buscar registros de combustível',
                status: 500
            };

        }
    }
}

module.exports = new FuelGateway();