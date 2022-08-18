#
# Create the installation layer
FROM node:16.15.0 as install

WORKDIR /usr/app

# Install Dependencies
COPY ./package.json ./
RUN npm i --silent

#
# Create the application development layer
FROM node:16.15.0 as develop

# Expose Ports
EXPOSE 6006

# Create and change into a directory in the container
WORKDIR /usr/app

COPY --from=install /usr/app/. .

COPY . .
