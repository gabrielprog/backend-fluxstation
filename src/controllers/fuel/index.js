const { object, string, number, mixed } = require('yup');
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
        const schema = object().shape({
            driverId: string()
              .uuid('O campo "driverId" deve ser um UUID válido')
              .required('O campo "driverId" é obrigatório'),
      
            quantityLiters: number()
              .positive('O campo "quantityLiters" deve ser um número positivo')
              .required('O campo "quantityLiters" é obrigatório'),
      
            fuelType: mixed()
              .oneOf(['gasoline', 'diesel', 'ethanol'], 'O campo "fuelType" deve ser um dos valores permitidos: Gasoline, Diesel, Ethanol')
              .required('O campo "fuelType" é obrigatório'),
        });

        try {
            await schema.validate(request.body, { abortEarly: false });
        } catch (validationError) {
            return response.status(400).json({ error: validationError.errors });
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
