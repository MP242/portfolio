# Utiliser une image Node.js comme base
FROM node:18-alpine AS base

FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Créer un répertoire de travail dans le conteneur
WORKDIR /usr/src

# Copier package.json and package-lock.jsondans le conteneur
COPY package.json yarn.lock ./

# Installer les dépendances
RUN yarn install

# Copier le source code
COPY . .

# Construire l'application Next.js
RUN yarn run build

# Exposer le port utilisé par l'application Next.js
EXPOSE 3000

# Démarrer l'application
CMD ["yarn", "start"]