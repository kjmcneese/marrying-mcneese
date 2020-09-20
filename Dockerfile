FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./build .

EXPOSE 80
CMD ["npm", "start"]