FROM openjdk:11-jre-slim
WORKDIR /app

COPY . .

ENTRYPOINT ["java", "-jar", "build/libs/kelvin-backend-0.0.1-SNAPSHOT.jar app.jar"]
