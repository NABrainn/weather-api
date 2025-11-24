# backend/Dockerfile (i analogicznie api/Dockerfile)
FROM gradle:8.4-jdk21 AS builder
WORKDIR /project
# kopiujemy pliki build-owe, najlepiej .gradle i src
COPY --chown=gradle:gradle . .
RUN gradle clean build --no-daemon -x test

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=builder /project/build/libs/*.jar app.jar
EXPOSE 7070
ENTRYPOINT ["java", "-jar", "app.jar"]
