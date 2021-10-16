FROM node:lts-slim

RUN npm install -g json-server
WORKDIR /data
COPY ./db.json /data
VOLUME [ "/data" ]

ENV PATH /app/node_modules/.bin:$PATH


EXPOSE 8080

ENTRYPOINT [ "json-server","--port 8080","--watch", "/data/db.json","--routes","/data/routes.json" ]

