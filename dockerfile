FROM hashicorp/envconsul as builder
FROM node:20-bullseye-slim

WORKDIR /var/app
COPY ./package.json /var/app/package.json
COPY ./.yarnrc /var/app/.yarnrc

# Copy the envconsul binary from the builder stage
COPY --from=builder /bin/envconsul /bin/envconsul

RUN yarn
COPY ./ /var/app/
RUN yarn build


ENV PORT 3000

CMD ["yarn", "start"]
# ENTRYPOINT ["envconsul", "-config", "application.hcl" , "-once"]
