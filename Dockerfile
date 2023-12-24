FROM node:18.17.0

WORKDIR /app

COPY package* ./

RUN npm install 

COPY . .

ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production

RUN npm run build

EXPOSE 3000

CMD [ "npm","run", "start" ]