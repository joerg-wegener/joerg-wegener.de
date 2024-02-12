FROM node:latest as base

ENV NODE_ENV=production
ENV PORT=80

RUN mkdir -p /usr/src/app/dist \
    && chown -R node:node /usr/src/app/dist
RUN mkdir -p /usr/src/app/node_modules \
    && chown -R node:node /usr/src/app/node_modules

WORKDIR /usr/src/app

USER node

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci \
    && npm cache clean --force

EXPOSE 80

FROM base as dev

ENV NODE_ENV=development
ENV PATH=/usr/src/app/node_modules/.bin:$PATH

RUN npm install

EXPOSE 9229

CMD [ "webpack", "--config", "webpack.dev.config.js", "--watch" ]
