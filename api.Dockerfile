FROM denoland/deno:1.17.1
EXPOSE 4444
WORKDIR /

USER deno

ADD . .
RUN deno cache ./src/app.ts

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "./src/app.ts"]