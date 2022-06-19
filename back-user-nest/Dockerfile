FROM node:14.15.4-alpine3.12
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g @nestjs/cli@8.0.0
RUN npm install && mv node_modules ../ 
COPY . .
EXPOSE 3003
CMD ["yarn", "start"]