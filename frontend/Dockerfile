FROM node:latest AS client-build

WORKDIR /client
COPY client/package*.json .
RUN npm install
COPY client/. .
RUN npm run build

FROM maven:latest AS server-build

WORKDIR /server
COPY server/pom.xml .
COPY server/src ./src
WORKDIR /server/src/main/resources/
RUN rm -rf /static
RUN mkdir /static
WORKDIR /server
COPY --from=client-build client/dist ./src/main/resources/static
RUN mvn clean package

FROM openjdk:latest AS server

WORKDIR /server
COPY --from=server-build /server/target/*jar-with-dependencies.jar app.jar
ENV PORT=5001
EXPOSE 5001
ENTRYPOINT ["java", "-jar", "app.jar"]