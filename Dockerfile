FROM node:18-alpine AS base

#构建生产镜像
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY /public ./public
COPY --chown=nextjs:nodejs /.next/standalone ./
COPY --chown=nextjs:nodejs /.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]