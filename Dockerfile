# base image
FROM node:14

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN yarn install --silent
COPY . /user/src/app

EXPOSE 5001

# start app
CMD ["yarn", "start"]
