# Multi-stage build for optimized Docker image
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY src/ ./src/
COPY docs/ ./docs/

# Build TypeScript
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy built files and docs from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/docs ./docs

# Set environment variables
ENV MCP_MODE=stdio
ENV LOG_LEVEL=error
ENV DISABLE_CONSOLE_OUTPUT=true
ENV NODE_ENV=production

# Run as non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

USER nodejs

# Entry point
ENTRYPOINT ["node", "dist/index.js"]


