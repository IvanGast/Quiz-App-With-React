FROM node:8.11.1

RUN mkdir /app
RUN mkdir /tmp/app

COPY ./src /tmp/app/src
COPY ./public /tmp/app/public
COPY ./jsconfig.json /tmp/app/jsconfig.json
COPY ./package.json /tmp/app/package.json
COPY ./package-lock.json /tmp/app/package-lock.json

WORKDIR /tmp/app/
RUN npm install
RUN npm run build
RUN cp -r /tmp/app/build /app/dist
RUN rm -rf /tmp/app

WORKDIR /app
RUN npm init -y
RUN npm i -D --save-exact local-web-server@2.6.0

EXPOSE 8000

COPY ./docker.start.sh /app/docker.start.sh
RUN chmod +x /app/docker.start.sh

CMD ["/app/docker.start.sh"]
