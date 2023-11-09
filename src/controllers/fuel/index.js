const FuelGateway = require("../../gateways/fuel/");

class FuelController {

    async read(request, response) {
        const recordsFuel = await FuelGateway.read(request)

        return response.status(recordsFuel.status).json({
            fuel: recordsFuel.fuel
        });
    }
}

module.exports = new FuelController();