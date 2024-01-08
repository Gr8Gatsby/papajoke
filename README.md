
# Papajoke

## Description

Papajoke is a JavaScript library for high-quality data jokes. It's built using modern JavaScript tools like Rollup and Vitest.

## Getting Started

### Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://your-repository-url/papajoke.git
cd papajoke
npm install
```

### Development

#### Setting Up HTTPS for Local Development with mkcert

1. Install mkcert and set up the local CA:
   \```bash
   mkcert -install
   \```
2. Create a locally-trusted certificate for your development server:
   \```bash
   mkcert localhost 127.0.0.1 ::1
   \```
   This will generate `localhost+2.pem` and `localhost+2-key.pem` in your current directory.


To start the development environment, run:

```bash
npm run dev
```

This command will start Rollup in watch mode. Any changes you make to the source files will trigger a rebuild.

### Running the Server

To start the local server, run:

```bash
npm start
```

This will start a local HTTP server on port 8888 with SSL support.

### Building the Project

To build the project for production, run:

```bash
npm run build:prod
```

This will create a production build in the `dist` directory.

### Testing

To run the tests, execute:

```bash
npm test
```

This uses Vitest to run tests defined in your project.

## Contributing

Contributions are welcome. Please feel free to submit pull requests or open issues to improve the project.

## License

[Your License Here]
