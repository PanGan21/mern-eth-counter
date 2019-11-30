FROM node

RUN npm install -g nodemon

RUN mkdir -p /app/backend
WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

CMD ["nodemon", "server.js"]