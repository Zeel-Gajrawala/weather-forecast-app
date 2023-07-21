FROM node:18.16-alpine

RUN mkdir /weather-forecast-app

WORKDIR /weather-forecast-app

RUN npm install -g @angular/cli@16.1.0

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 4200 49153

CMD npm start