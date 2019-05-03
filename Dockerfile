# base image
FROM node:10
WORKDIR /app
COPY . .
# install dependencies
RUN npm install
# specify the port number the container should expose
EXPOSE 3004
# script to run application
CMD ["npm","run","start"]
