FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

CMD ["npm", "run", "build"]
COPY ./build .

EXPOSE 80

CMD ["npm", "start"]