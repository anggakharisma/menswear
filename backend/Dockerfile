FROM node:latest
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./
RUN npm install
# Copy app source code
COPY . .
CMD [ "npm", "start" ]