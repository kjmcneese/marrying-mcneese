FROM gcr.io/cloud-builders/docker

# add app
COPY . .

# start app
CMD ["npm", "start"]