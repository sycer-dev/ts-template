FROM node:15-alpine

LABEL name ""
LABEL version "0.1.0"
LABEL maintainer ""

WORKDIR /usr/project

COPY . .

RUN apk add --update
RUN apk add --no-cache ca-certificates
RUN apk add --no-cache --virtual .build-deps git curl build-base python g++ make yarn tzdata
RUN npm ci
RUN apk del .build-deps

RUN npm run build
CMD ["node", "."]

