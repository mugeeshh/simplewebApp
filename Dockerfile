From node:alpine

#install node
WORKDIR /usr/app

COPY ./package.json ./

#install node
run npm install

COPY ./ ./
#run npm

CMD ["npm","start"]