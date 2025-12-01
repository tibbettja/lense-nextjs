FROM node:24-alpine AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY . .
RUN yarn build


FROM builder AS standalone
WORKDIR /app
RUN cp -r .next/standalone ./standalone
RUN cp -r .next/static ./standalone/.next/static
RUN cp -r public ./standalone/public

FROM node:24-alpine AS runner
WORKDIR /app
COPY --from=standalone /app/standalone ./
COPY --from=standalone /app/standalone/public ./public
COPY --from=standalone /app/standalone/.next/static ./.next/static
COPY .env.local .env.local
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.js"]