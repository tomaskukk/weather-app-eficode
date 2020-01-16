FROM node

WORKDIR /usr/src/app

# RUN chmod -R 777 /usr/src/app
COPY package*.json ./
RUN npm install
ENV ENDPOINT=http://localhost:9000/api

COPY . .
EXPOSE 8000 49153

CMD ["npm", "start"]
