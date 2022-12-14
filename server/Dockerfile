
FROM node:16-alpine

WORKDIR /server
COPY package.json .
RUN npm install --prodcution
COPY . .
CMD npm start
