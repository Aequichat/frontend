FROM node:12
# Setting env variables from secrets
ENV DB_ENDPOINT=_DB_ENDPOINT_
ENV DB_USERNAME=_DB_USERNAME_
ENV DB_PASSWORD=_DB_PASSWORD_
ENV DB_NAME=_DB_NAME_
ENV API_PORT=_API_PORT_

COPY backend/package*.json ./
RUN npm install
COPY backend/ ./
EXPOSE _API_PORT_
CMD [ "node", "index.js" ]