# Base image
FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY --chown=node:node package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY --chown=node:node . .

# Creates a "dist" folder with the production build
RUN npm run build

USER node

# Start the server using the production build
CMD [ "node", "dist/main.js" ]