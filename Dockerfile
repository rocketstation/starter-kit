FROM keymetrics/pm2:12-stretch

ARG SCOPE

ENV SCOPE ${SCOPE}

RUN mkdir -p /app

WORKDIR /app

COPY lerna.json .
COPY package.json .
COPY .eslintrc.js .
COPY .prettierrc.js .
COPY webpack.config.js .
COPY api/.eslintrc.js api/
COPY api/package.json api/
COPY api/webpack.config.js api/
COPY api/lib api/lib/
COPY api/src/$SCOPE api/src/$SCOPE/

RUN npm i

RUN npx lerna bootstrap --scope api

ENV NODE_ENV production

RUN SCOPE=api${SCOPE} ./node_modules/.bin/webpack

CMD pm2-runtime ./api/build/${SCOPE}/main.js --instances=1 --max_memory_restart=1G
