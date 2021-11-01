FROM node:14.18.1 as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build   

FROM nginx:alpine
COPY --from=node /app/dist/applcrst /usr/share/nginx/html