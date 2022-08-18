[BeyondRisk Components](README.md) > Getting Started

# Getting Started

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Building and running](#building-and-running-the-components)
- [Testing components](#testing-components)
- [Deployment](#deployment)
- [API](#api)

BeyondRisk Components are available on production at https://portal.beyondrisk.io and in local
environments at [http://localhost:6006](localhost:6006).

## Prerequisites

Docker/Kubernetes and Git are foundational tools you will need installed and configured on your
computer just like almost any kind of BeyondRisk development project:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Kubernetes](https://kubernetes.io/)
- [Git](https://git-scm.com/downloads)
- [NVM](https://github.com/nvm-sh/nvm)

## Installation

### Get the repository

```
git clone git@github.com:BeyondRisk/beyondrisk-components.git
cd beyondrisk-components
```

### Install correct node version using NVM (Node Version Manager)

- Run `nvm install v16`
  This will install Node v16 (LTS - stable)

- Run `nvm use 16`
  This will flag installed version as default for session In order to set nvm default version 16 type: `nvm use default 16` This will set installed version to default.

- Run `npm i -g standard ts-standard typescript@4.4.4 npm@8.5.5`
  This will install a stable version for Standard, TS-Standard, Typescript, and NPM that is used across the projects.

- Run `npm i`
  This will install all necessary packages for setting up and running local development environment.

## Building and running the components

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run storybook`

Runs the app in the development mode with storybook preview.
Open [http://localhost:6006](http://localhost:6006) to view storybook it your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `docker-compose up`

Runs the app in the development mode inside Docker container.\
Open [http://localhost:6006](http://localhost:6006) to view storybook it your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `./super-lint-check` or `npm run super-linter`

Runs the super-linter in local environment inside Docker container.\
You will be able to see and track lint checks and possible errors in the console.

### Commands that handle auto-linting:

- `npm run lint` - This command is used to auto-lint all **.js**, **.ts**, and **.scss** files within the project.
- `npm run lint:js` - This command is used for auto-lint of all **.js** files.
- `npm run lint:ts` - This command is used for auto-lint of all **.ts** files.
- `npm run lint:scss` - This command is used for auto-lint of all .**scss** files.
