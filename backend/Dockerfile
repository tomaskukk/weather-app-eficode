FROM node


WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install 
ENV APPID=${WEATHER_API_ID}

COPY . .
EXPOSE 9000

CMD ["npm", "start"]
