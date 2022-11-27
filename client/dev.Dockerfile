# dev environment
FROM node:16.18.0-alpine3.16
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
CMD ["npm", "run", "start"]