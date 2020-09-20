FROM gcr.io/cloud-builders/docker

# add app
COPY . /app

# build app
RUN make /app

# start app
CMD ["npm", "start"]