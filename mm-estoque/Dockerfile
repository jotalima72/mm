FROM node:14.17.0-alpine3.12
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g @nestjs/cli@8.0.0
RUN yarn && mv node_modules ../
COPY . .
EXPOSE 3005
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start"]