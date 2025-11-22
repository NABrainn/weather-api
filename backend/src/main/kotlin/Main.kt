import controller.WeatherController
import io.javalin.Javalin

fun main() {
    val port = System.getenv("SERVER_PORT")?.toIntOrNull() ?: 8080
    val app = Javalin.create().start(port)
    WeatherController.register(app)
}
