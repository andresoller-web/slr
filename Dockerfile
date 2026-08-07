# STAGE 1 — Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Instalar dependências do sistema necessárias
RUN apk add --no-cache libc6-compat

# Copiar configs de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar pnpm globalmente
RUN npm install -g pnpm@9

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copia o resto do projeto
COPY . .

# Build do Next.js
RUN pnpm build


# STAGE 2 — Runner
FROM node:20-alpine AS runner
WORKDIR /app

# Instalar dependências do sistema e pnpm
RUN apk add --no-cache libc6-compat && \
    npm install -g pnpm@9

# Criar usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copiar build final
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Mudar para usuário não-root
USER nextjs

# Porta padrão
EXPOSE 3000

# Variáveis de ambiente para segurança
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Comando de execução usando npx para garantir que pnpm seja encontrado
CMD ["npx", "pnpm", "start"]
