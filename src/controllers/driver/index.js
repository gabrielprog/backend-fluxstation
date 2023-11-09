const DriverGateway = require("../../gateways/driver/");
const { object, string } = require('yup');

class DriverController {
    async create(request, response) {

        const schema = object().shape({
            name: string().required('O campo "name" é obrigatório'),
            email: string().email('O campo "email" não é um email válido').required('O campo "email" é obrigatório')
        });

        try {
            await schema.validate(request.body, { abortEarly: false });
        } catch (error) {
            return response.status(400).json({ error: error.errors });
        }
        
        const recordsDriver = await DriverGateway.create(request);

        return response.status(recordsDriver.status).json({
            driver: recordsDriver.driver
        });
    }
}

module.exports = new DriverController();