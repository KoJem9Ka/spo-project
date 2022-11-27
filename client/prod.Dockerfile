# build environment
FROM node:16.18.0-alpine3.16 as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV PUBLIC_URL=/
ENV REACT_APP_SERVER_HOST=${REACT_APP_SERVER_HOST}
ENV REACT_APP_SERVER_PORT=${REACT_APP_SERVER_PORT}
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
