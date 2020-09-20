FROM node:alpine

# add app
COPY . /app

# build app
RUN make /app

# start app
CMD ["npm", "start"]