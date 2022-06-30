FROM node:16-alpine AS Builder
RUN mkdir -p /code_run_docker
WORKDIR /code_run_docker
ADD . /code_run_docker
RUN yarn install
RUN yarn build-sit

FROM node:16-alpine
WORKDIR /code_run_docker
COPY --from=Builder /code_run_docker .
CMD npm start