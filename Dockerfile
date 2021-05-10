FROM node:13-alpine

RUN mkdir -p /home/foundation \
    npm install

COPY . /home/foundation

CMD ["node", "/home/foundation/index.js"]