const FuelRecord = require('../../db/models/fuelrecord');
const { sequelize } = require('../../db/connection');

class FuelGateway {

    isValidId(id) {
        if(id === undefined) return false;
        if(id === "") return false;
        if(id < 0) return false;

        return true;
    }

    async read({ params }) {
        let { id, date } = params;

        id = 1;

        if (!this.isValidId(id)) {
            return { 
                fuel: 'Parâmetro "id" não foi fornecido ou é indefinido.',
                status: 400
            };
        }

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