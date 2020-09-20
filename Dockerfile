FROM node:alpine

# add app
COPY . /app

# start app
CMD ["npm", "start"]