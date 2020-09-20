FROM gcr.io/cloud-builders/docker

# add app
COPY ./build /

# start app
CMD ["npm", "start"]