FROM node


WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install 
ENV APPID=890fb314540c756373d07759c6b61320

COPY . .
EXPOSE 9000

CMD ["npm", "start"]
