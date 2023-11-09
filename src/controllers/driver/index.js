const DriverGateway = require("../../gateways/driver/");

class DriverController {
    async create(request, response) {
        const recordsDriver = await DriverGateway.create(request)

        return response.status(recordsDriver.status).json({
            driver: recordsDriver.driver
        });
    }
}

module.exports = new DriverController();