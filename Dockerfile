FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "run", "build"]
COPY ./build .

EXPOSE 3000

CMD ["npm", "start"]