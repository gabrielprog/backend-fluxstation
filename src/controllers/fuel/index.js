const FuelGateway = require('../../gateways/fuel/');
const UseCaseFuel = require('../../fuel/useCases/UseCase');

class FuelController {

    async read(request, response) {

        if (request.query.id === undefined) {
            return response.status(400).json({ 
                fuel: 'Parâmetro "id" não foi fornecido ou é indefinido.',
            });
        }

        const recordsFuel = await FuelGateway.read(request)

        return response.status(recordsFuel.status).json({
            fuel: recordsFuel.fuel
        });
    }

    async create(request, response) {

        if (request.body.driverId === undefined) {
            return response.status(400).json({ 
                fuel: 'Campo "id" não foi fornecido ou é indefinido.',
            });
        }
        const useCases = new UseCaseFuel();
        request.body.totalPrice = useCases.calculePriceFuel(request.body.fuelType.toLowerCase(), request.body.quantityLiters);

        const recordsFuel = await FuelGateway.create(request)

        return response.status(recordsFuel.status).json({
            fuel: recordsFuel.fuel
        });
    }
}

module.exports = new FuelController();