FROM node:15-alpine3.10
WORKDIR /home/app/node_docker/
COPY package.json package-lock.json /home/app/node_docker/
RUN npm install -g hexo-cli
RUN npm install
COPY . ./
RUN hexo generate -d

FROM nginx:1.17.3
ENV PORT=80
ENV PORT_SSL=443
EXPOSE $PORT
EXPOSE $PORT_SSL
COPY --from=0 /home/app/node_docker/public/ /usr/share/nginx/html
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
