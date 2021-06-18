FROM node:15.14.0-alpine3.13 as builder

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY public ./public
COPY src ./src

RUN npm ci
RUN npm run build
RUN npm prune --production

FROM nginx

COPY --from=builder /build /usr/share/nginx/html

ENV NODE_ENV production
ENV TZ utc
