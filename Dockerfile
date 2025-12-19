# Multi-stage Dockerfile for building and serving the Vite React app with Nginx
# Stage 1 - build
FROM node:18-alpine AS builder
WORKDIR /app

# Install build deps
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# Stage 2 - runtime
FROM nginx:stable-alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config (for SPA fallback)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port (Render will use the exposed port)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
