FROM alpine:3.16.2
RUN apk add --no-cache \
    php81 \
    php81-pgsql \
    php81-openssl \
    php81-mbstring

WORKDIR /app
COPY . .
COPY php.linux.ini /usr/local/etc/php/php.ini

EXPOSE 80
CMD [ "php81", "-S", "0.0.0.0:80", "router.php" ]