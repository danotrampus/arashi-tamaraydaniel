FROM node:carbon

ENV TZ=America/Argentina/Buenos_Aires
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ADD ./app /opt/app/
WORKDIR /opt/app

RUN yarn install

CMD yarn run start