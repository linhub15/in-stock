FROM denoland/deno:1.17.1
EXPOSE 4444
WORKDIR /

USER deno

# Cache dependency as layer
COPY ./src/deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache ./src/app.ts

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "./src/app.ts"]