FROM node

RUN npm install -g nodemon

RUN mkdir -p /app/backend
WORKDIR /app/server

COPY package*.json /app/server/

RUN npm install

COPY . /app/server

CMD ["nodemon", "server.js"]