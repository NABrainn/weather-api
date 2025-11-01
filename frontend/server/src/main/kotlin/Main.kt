package app.weather

import io.javalin.Javalin
import io.javalin.http.staticfiles.Location

fun main() {
    val port = System.getenv("PORT")?.toInt() ?: 8080
    val app = Javalin
        .create { config ->
            config.staticFiles.add("/static/dist", Location.CLASSPATH)
            config.spaRoot.addFile("/", "/static/dist", Location.CLASSPATH)
        }
        .start(port)
}