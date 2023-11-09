const FuelGateway = require("../../gateways/fuel/");

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
}

module.exports = new FuelController();