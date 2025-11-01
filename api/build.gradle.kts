plugins {
    kotlin("jvm") version "2.0.20"
    application
}

group = "StudentApp"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.javalin:javalin:5.6.1")
    implementation("com.squareup.okhttp3:okhttp:4.12.0")

}

tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(21)
}

application {
    mainClass.set("WeatherApiKt")
}

tasks.jar {
    manifest {
        attributes["Main-Class"] = "WeatherApiKt"
    }
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    from(configurations.runtimeClasspath.get().map { if (it.isDirectory) it else zipTree(it) })
}