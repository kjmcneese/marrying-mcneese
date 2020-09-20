FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN make .

EXPOSE 80
CMD ["npm", "start"]