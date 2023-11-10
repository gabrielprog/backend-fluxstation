# Minhas decisões

Decidi usar a arquitetura limpa, pois, como o autor diz, ela pode ser utilizada independentemente do framework e torna a lógica de negócio testável independentemente do framework. Utilizei dois design patterns, que foram o Factory e o Strategy, onde o Strategy está encapsulando o algoritmo de cálculo de preço de cada tipo de combustível. Atualmente, ele está apenas retornando o preço do combustível, mas futuramente poderia incluir impostos, entre outros. A lógica de cálculo de preço final ficou na parte da entidade Fuel, já que o foco principal de um posto é vender gasolina, então outros setores da empresa poderiam necessitar dessa lógica. Como o próprio desafio propõe criar uma solução rápida em curto período de tempo, acredito que poderia ser ainda melhor caso fosse melhor planejado, fiz isso apenas tirando ideias da cabeça na hora

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
        "fuelType": "Diesel"
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

- **Endpoint:** `GET http://127.0.0.1:8080/fuel?id=b93a7532-625a-4b91-a019-f13c8477b699&date=2023-11-10`
- **Parâmetros de Consulta Opcionais:**
	`date` (opcional): Data específica para filtrar os abastecimentos. O formato da data deve ser YYYY-MM-DD.
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
- **Observações:**

- Se o parâmetro `date` não for fornecido, a API retornará todos os abastecimentos para o motorista especificado, independente da data.
- Certifique-se de seguir o formato de data adequado (YYYY-MM-DD) ao fornecer o parâmetro `date`.
- O filtro por data é opcional e pode ser combinado com outros parâmetros de consulta, conforme necessário.

