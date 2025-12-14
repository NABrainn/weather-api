import io.javalin.Javalin
import io.javalin.http.Context
import okhttp3.OkHttpClient
import okhttp3.Request
import java.net.URLEncoder

val apiKey = System.getenv("WEATHER_API_KEY") ?: throw Exception("Missing API key")
val baseUrl = "https://api.weatherapi.com/v1/forecast.json"
val client = OkHttpClient()

fun main() {
    val app = Javalin.create().start(8080)

    app.get("/weather") { ctx: Context ->
        val city = ctx.queryParam("city") ?: "Warsaw"
        val encodedCity = URLEncoder.encode(city, "UTF-8")
        val url =
            "$baseUrl?key=$apiKey&q=$encodedCity&days=3&aqi=no&alerts=no"

        val request = Request.Builder()
            .url(url)
            .build()

        client.newCall(request).execute().use { response ->
            if (!response.isSuccessful) {
                ctx.status(502).json(
                    mapOf("error" to "Failed to fetch weather data")
                )
                return@use
            }

            val responseBody = response.body?.string()
            if (responseBody == null) {
                ctx.status(500).json(
                    mapOf("error" to "Empty response from weather API")
                )
                return@use
            }

            ctx.header("Content-Type", "application/json")
            ctx.result(responseBody)
        }
    }
}
