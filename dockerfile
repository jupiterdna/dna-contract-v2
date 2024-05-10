FROM hashicorp/envconsul as builder
FROM node:18-alpine


RUN apk update;
RUN apk add git;
RUN npm install -g pm2


# Copy the envconsul binary from the builder stage
COPY --from=builder /bin/envconsul /bin/envconsul


WORKDIR /var/app
COPY package.json /var/app/package.json
COPY .yarnrc /var/app/.yarnrc

# Copy the envconsul binary from the builder stage
COPY --from=builder /bin/envconsul /bin/envconsul

RUN yarn
COPY ./ /var/app/
RUN npm install --registry=https://npm.dnamicro.net
##RUN yarn build
RUN npm run build


ENV PORT=5000
ENV NODE_ENV=production
##CMD ["pm2-runtime","dist/main.js"]
CMD ["next build"]
# ENTRYPOINT ["envconsul", "-config", "application.hcl" , "-once"]
