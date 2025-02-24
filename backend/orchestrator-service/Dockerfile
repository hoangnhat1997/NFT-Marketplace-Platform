FROM node:20 AS builder

WORKDIR /app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install

COPY --chown=node:node . .


CMD [ "yarn", "start" ]