# Use official Node.js runtime as base image
FROM node:21-slim

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN yarn

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["npm", "run", "start"] 