FROM node:14 as client

WORKDIR /app/client

COPY client/package.json /app/client

RUN npm install

COPY client /app/client

RUN npm run build

FROM node:16.13.0-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

COPY --from=client /app/client/build /app/client/build

EXPOSE 8080

CMD [ "npm", "start" ]
