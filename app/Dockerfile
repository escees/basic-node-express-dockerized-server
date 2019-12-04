FROM node:alpine

RUN mkdir /usr/cache
WORKDIR /usr/cache

COPY package*.json ./
RUN npm install

COPY . .

WORKDIR /app

ENTRYPOINT ["ash", "/app/entrypoint.sh"]
