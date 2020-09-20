FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "run", "build"]
COPY ./build .

EXPOSE 8080

CMD ["npm", "start"]