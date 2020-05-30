FROM node:12
# Setting env variables from secrets
ENV DB_ENDPOINT=__DB_ENDPOINT__
ENV DB_USERNAME=__DB_USERNAME__
ENV DB_PASSWORD=__DB_PASSWORD__
ENV DB_NAME=__DB_NAME__
#COPY package*.json ./
#RUN npm install
#COPY . .
#EXPOSE 3000
#CMD [ "node", "index.js" ]