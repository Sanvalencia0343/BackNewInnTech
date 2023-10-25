FROM node:16.13.1-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install 

EXPOSE 3001
CMD [ "node", "app.js" ]