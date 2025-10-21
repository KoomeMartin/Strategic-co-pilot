# syntax=docker/dockerfile:1.7

# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps separately for better layer caching
COPY package.json package-lock.json* ./
RUN npm ci --include=optional

# Copy source and build
COPY . .
RUN npm run build

# Production runtime (standalone output)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 3000

# Run as non-root
USER nextjs

# Start Next.js server
CMD ["node", "server.js"]
