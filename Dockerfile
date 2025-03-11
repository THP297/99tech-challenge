# Use the official Node.js image as the base
FROM node:16-alpine

# Install build dependencies
RUN apk add --no-cache --virtual .build-deps gcc g++ make python3

# Install sqlite3 build dependencies
RUN apk add --no-cache sqlite-dev

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies (this will rebuild sqlite3)
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port (3000)
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "dev"]
