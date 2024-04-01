# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.10.0

# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Copy the rest of the source files into the image.
COPY . .
# Run the build script.
RUN npm install

# Expose the port that the application listens on.
EXPOSE 3030

# Run the application.
CMD npm start
