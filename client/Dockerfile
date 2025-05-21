FROM node:20

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# serve with a static file server
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist"]
