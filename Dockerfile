from node:14.15.0 as node
WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build -- --prod -c=production

FROM nginx:alpine
COPY --from=node /app/dist/platzistore /usr/share/nginx/html