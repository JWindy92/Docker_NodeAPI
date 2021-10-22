FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port used by the API
EXPOSE 3000

# Run the command to start the server (node app.js)
CMD ["node", "app.js"]