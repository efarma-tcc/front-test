# Etapa 1: Build
FROM node:18 AS build

# Cria o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY . .

# Instala as dependências e constrói o projeto
RUN npm install
RUN npm run build

# Etapa 2: Configuração do servidor nginx
FROM nginx:alpine

# Copia os arquivos construídos para o diretório de servição do nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia a configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta do container para o exterior
EXPOSE 80

# Inicia o nginx
CMD ["nginx", "-g", "daemon off;"]
