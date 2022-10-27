# Specify the parent image from which we build
FROM amazoncorretto:17

# Set the working directory
WORKDIR /

# Copy files from your host to your current working directory
COPY dripshop/target/dripshop-0.0.1-SNAPSHOT.jar /

# Run the application
CMD ["java", "-jar", "dripshop-0.0.1-SNAPSHOT.jar"]
