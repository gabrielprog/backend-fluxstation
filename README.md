# Minhas decisões

Este é um projeto construído com Express e Sequelize que gerencia informações sobre motoristas e abastecimento de combustível.

## Pré-requisitos
Antes de começar, certifique-se de ter o Node.js e o npm instalados em seu sistema. Além disso, é recomendável ter o MySQL instalado para este exemplo.

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/gabrielprog/backend-fluxstation.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd backend-fluxstation
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install

## Configuração

1. **Variáveis de Ambiente:**
   Antes de executar a aplicação, é necessário configurar as variáveis de ambiente. Copie o arquivo `.env.example` para `.env` e preencha as informações necessárias, como:

    ```env
    DB_USERNAME=gabriel654
    DB_PASSWORD=gabriel654
    DB_DATABASE=fluxstation
    DB_HOST=127.0.0.1
    DB_DIALECT=mysql
    ```

2. **Docker Compose:**
   Você pode usar o Docker Compose para iniciar um banco de dados com as configurações padrão. Certifique-se de ter o Docker e o Docker Compose instalados. Execute o seguinte comando:

    ```bash
    docker-compose up -d
    ```

   Isso iniciará um banco de dados MySQL com as configurações do arquivo `.env`.

## Executando o Projeto

Agora que o ambiente está configurado, você pode iniciar o aplicativo. Execute o seguinte comando:

```bash
npx sequelize-cli db:migrate
npm start
```

opcional: ```bash npx sequelize-cli db:seed:all```

## Uso da API

### Cadastrar Motorista

- **Endpoint:** `POST http://127.0.0.1:8080/driver`
- **Headers:** `content-type: application/json`
- **Corpo da Requisição:**

    ```json
    {
        "name": "Bruno",
        "email": "example444@gmail.com"
    }
    ```

- **Resposta:**

    ```json
    {
        "driver": {
            "id": "b93a7532-625a-4b91-a019-f13c8477b699",
            "name": "Bruno"
        }
    }
    ```

### Registrar Abastecimento

- **Endpoint:** `POST http://127.0.0.1:8080/fuel`
- **Headers:** `content-type: application/json`
- **Corpo da Requisição:**

    ```json
    {
        "driverId": "b93a7532-625a-4b91-a019-f13c8477b699",
        "quantityLiters": 40.2,
        "fuelType": "Diesel",
        "totalPrice": 80.0
    }
    ```

- **Resposta:**

    ```json
    {
        "fuel": {
            "id": 11,
            "quantityLiters": 40.2,
            "fuelType": "Diesel",
            "totalPrice": 142.0266,
            "driverId": "b93a7532-625a-4b91-a019-f13c8477b699",
            "updatedAt": "2023-11-10T18:15:59.385Z",
            "createdAt": "2023-11-10T18:15:59.385Z"
        }
    }
    ```

### Consultar Abastecimento

- **Endpoint:** `GET http://127.0.0.1:8080/fuel?id=b93a7532-625a-4b91-a019-f13c8477b699`
- **Resposta:**

    ```json
    {
        "fuel": [
            {
                "id": 11,
                "quantityLiters": 40.2,
                "fuelType": "Diesel",
                "totalPrice": 142.027,
                "driverId": "b93a7532-625a-4b91-a019-f13c8477b699",
                "createdAt": "2023-11-10T18:15:59.000Z",
                "updatedAt": "2023-11-10T18:15:59.000Z"
            }
        ]
    }
    ```

