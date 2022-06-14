FROM node:lts

WORKDIR /app

EXPOSE 3000
COPY ./ /app/

RUN npm install
RUN npm run build

USER 1000

CMD ["npm", "run", "serve"]