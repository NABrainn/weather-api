import controller.WeatherController
import io.javalin.Javalin

fun main() {
    val app = Javalin.create().start(8080)
    WeatherController.register(app)
}
