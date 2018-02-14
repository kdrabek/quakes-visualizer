FROM node:9.2.0

RUN mkdir -p /app
WORKDIR /app
ADD . /app

EXPOSE 5000
