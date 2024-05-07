# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json, yarn.lock, and other configuration files
# Note: Be sure to include next.config.js, .env files, or any other files your app needs for configuration
COPY package.json yarn.lock next.config.js .env* ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build your Next.js application
RUN yarn build

# Expose the port the app runs on
EXPOSE $PORT

# Command to run the app
CMD ["yarn", "start"]
