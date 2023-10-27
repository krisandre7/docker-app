FROM node:14

WORKDIR /app

COPY ./app/package.json ./app/package-lock.json /app/
RUN npm install

COPY ./app /app

CMD ["node", "server.js"]
