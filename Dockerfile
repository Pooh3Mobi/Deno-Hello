# Dockerfile
FROM ubuntu:18.04

COPY . server/

RUN apt-get update && apt-get install -y sudo; \
    sudo apt-get update && sudo apt-get -y install curl unzip; \
    curl -fsSL https://deno.land/x/install/install.sh | sh;

WORKDIR server/

EXPOSE 4040

ENV LANG C.UTF-8

ENV TZ Asia/Tokyo

ENV DENO_INSTALL="/root/.deno"

ENV PATH="$DENO_INSTALL/bin:$PATH"

CMD deno run --allow-net --allow-read index.ts