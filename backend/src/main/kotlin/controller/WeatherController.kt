package controller

import io.javalin.Javalin
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import model.WeatherData
import usecase.ReadFetchOrReadWeather

object WeatherController {
    fun register(app: Javalin) {
        app.get("/weather") { ctx ->
            val city = ctx.queryParam("city")

            if (city == null) {
                ctx.status(400).result("Missing query param: city")
                return@get
            }

            val data: WeatherData = ReadFetchOrReadWeather.readFetchOrReadWeatherUseCase(city)
            println("data: $data")

            if (data == null) {
                ctx.status(404).result("No weather data found")
                return@get
            }

            ctx.contentType("application/json")
            ctx.status(200)
            ctx.result(Json.encodeToString(data))

        }
    }
}

