const FuelRecord = require('../../db/models/fuelrecord');
const { sequelize } = require('../../db/connection');

class FuelGateway {

    async read({ params }) {
        let { id, date } = params;

        id = 1;

        try {
            const fuelRecordModel = new FuelRecord(sequelize);
            const options = {
                where: {
                    driverId: id,
                },
            };

            if (date) options.where.createdAt = date;
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