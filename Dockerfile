# Create the container from the alpine linux image
FROM alpine:3.12 AS builder

RUN apk add --update nodejs yarn git

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

FROM alpine:latest AS runner

RUN apk add --update nginx 

RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /var/www/html

EXPOSE 80

# make all files belong to the nginx user
RUN chown nginx:nginx /var/www/html

# start nginx and keep the process from backgrounding and the container from quitting
CMD ["nginx", "-g", "daemon off;"]