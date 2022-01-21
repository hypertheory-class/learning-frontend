FROM node:14.17.6-slim AS build
WORKDIR /dist/src/app
RUN npm i -g npm@8.3.1
RUN npm cache clean --force
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest AS ngi
COPY --from=build /dist/src/app/dist/learning-frontend /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
