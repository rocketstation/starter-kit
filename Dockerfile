FROM keymetrics/pm2:12-stretch

ARG SCOPE

ENV SCOPE ${SCOPE}

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY lerna.json .
COPY package.json .
COPY api/.eslintrc.js api/
COPY api/.prettierrc.js api/
COPY api/babel.config.js api/
COPY api/convention.js api/
COPY api/package.json api/
COPY api/webpack.config.js api/
COPY api/lib api/lib/
COPY api/src/$APP api/src/$APP/

RUN npm i

RUN npx lerna bootstrap --scope api

ENV NODE_ENV production

RUN npx lerna run build --scope api --stream

CMD pm2-runtime ./api/build/${SCOPE}/main.js --instances=1 --max_memory_restart=1G
