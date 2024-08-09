ARG BASE_VERSION=latest
ARG RUNTIME_SLIM_VERSION=slim

# Use the specified base image with a tag for building the app
FROM ${REPO_LOCATION}dev-env/node/nodejs:${BASE_VERSION} AS deps

# Create app directory
WORKDIR /home/app

# Copying package.json and package-lock.json
COPY package*.json ./

# Copying .npmrc for private registry configuration
COPY .npmrc ./

# Install pnpm globally
RUN npm install -g pnpm

# Install app dependencies ensuring the user has proper permissions
# If you're using a non-root user, you can remove the chown command
RUN pnpm install --loglevel verbose

# Copy the rest of your application's source code from your host to your image filesystem.
COPY . .

# Build the app (if your app requires a build step, e.g., TypeScript to JavaScript)
RUN pnpm build

# Use a smaller base image for running the app
FROM ${REPO_LOCATION}dev-env/node/nodejs:${RUNTIME_SLIM_VERSION} AS builder

# Create app directory
WORKDIR /home/app

# Copy only the necessary files from the build stage
# COPY --from=deps /home/app/node_modules ./node_modules
# COPY --from=deps /app/package*.json ./
COPY --from=deps /home/app/.next/standalone ./standalone
COPY --from=deps /home/app/public /home/app/standalone/public
COPY --from=deps /home/app/.next/static /home/app/standalone/.next/static

# Install PM2 globally
# RUN npm install -g pm2



# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 3000

# Run the specified command within the container.
CMD ["node", "./standalone/server.js"]
