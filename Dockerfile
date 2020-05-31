FROM node:12
# Setting env variables from secrets
ENV DB_ENDPOINT=__DB_ENDPOINT__
ENV DB_USERNAME=__DB_USERNAME__
ENV DB_PASSWORD=__DB_PASSWORD__
ENV DB_NAME=__DB_NAME__
ENV API_PORT=__API_PORT__
ENV EMAIL_ADDRESS=__EMAIL_ADDRESS__
ENV EMAIL_PASSWORD=__EMAIL_PASSWORD__

COPY backend/package*.json ./
RUN npm install
COPY backend/ ./
RUN npm run lint
EXPOSE __API_PORT__
CMD [ "node", "index.js" ]
