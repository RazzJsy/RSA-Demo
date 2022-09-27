# RSA-Demo React Application + Tests

This project was created in using React to meet the specified requirements laid out in the provided wireframe. In addition to the main application the repository contains a suite of (Cypress) tests for each of the main components consumed.

## Installation

Once you have cloned the repository, navigated to the root project directory (`/rsa-demo`) and run the following commands:

### `npm install`
### `npm start`

#### `If running on a Linux or MacOs machine please edit the package.json file in the root director file with the following:`

```haskell
replace: "\"set PORT=3001 && react-scripts start\"
with:    "\"PORT=3001 && react-scripts start\"
```

The application has be configured to load simultaneously both the mock-api and the application from the one command. This does however mean the ports are fixed (these can however be amended in package.json "start" parameter):

```haskell
api: 3000
app: 3001
```