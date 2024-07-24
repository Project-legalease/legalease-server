# LEGALEASE SERVER

Backend implementations and API for the Legalease platform.

## Table of Contents

- [LEGALEASE SERVER](#legalease-server)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Development](#development)
    - [Endpoints](#endpoints)
  - [Project Structure](#project-structure)
  - [Documentation](#documentation)
  - [Authors](#authors)
  - [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Project-legalease/legalease-server.git
   cd legalease-server
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file based on the `.env.sample`:

   ```sh
   cp .env.sample .env
   ```

4. Update the `.env` file with your configuration.

## Usage

### Development

To start the server in development mode with hot-reloading:

```sh
npm run dev
```

### Endpoints

List of available endpoints:

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| POST   | /api/v1/auth/login    | Login to account       |
| POST   | /api/v1/auth/register | Register a new account |

## Project Structure

├── src
│ ├── config # Server configurations
│ ├── enums
│ ├── interfaces
│ ├── middlewares
│ ├── models
│ ├── routes # API endpoints
│ ├── services # Application Logic
│ ├── utils # Helper functions
│ ├── app.ts
│ ├── index.ts
│ └── ...  
 ├── test
├── .env
├── .env.sample
├── .eslintrc
├── .gitignore
├── jest.config.js
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── package.json
├── package.json
├── package.json
└── ...

## Documentation

To start the server in development mode with hot-reloading:

```sh
npm run dev
```

## Authors

- **Etomu Gbenga Joshua** - _CyberGa_ - [etomu.joshua@gmail.com](mailto:etomu.joshua@gmail.com)
- **Obikwelu Chidera Jane** - _Derasine96_ - [chidexobikwelu@gmail.com](mailto:chidexobikwelu@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Open your browser and navigate to: `http://localhost:5000/api/docs`
