FROM node:10

WORKDIR /usr/src/app

RUN npm install -g bower

RUN npm install -g grunt-cli

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["grunt", "server"]