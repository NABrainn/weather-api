import controller.WeatherController
import io.javalin.Javalin
import io.javalin.plugin.bundled.CorsPluginConfig

fun main() {
    DatabaseFactory.init()

    val port = System.getenv("SERVER_PORT")?.toIntOrNull() ?: 8080
    val app = Javalin.create { config ->
        config.plugins.enableCors { cors ->
            cors.add { rule ->
                rule.allowHost("http://localhost:5173")
            }
        }
    }.start(port)
    WeatherController.register(app)
}
