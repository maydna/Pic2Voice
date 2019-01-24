# Stage 1 - the build process

FROM node:10.14.2 as builder

WORKDIR /usr/src/pic2voice

COPY ./ ./

RUN npm install --only=production
RUN npm run build


# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=builder /usr/src/pic2voice/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
