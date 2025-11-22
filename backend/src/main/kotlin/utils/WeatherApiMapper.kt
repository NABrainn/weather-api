package utils

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import model.WeatherData

object WeatherApiMapper {

    private val jsonParser = Json {
        ignoreUnknownKeys = true
    }

    fun parseWeatherResponse(json: String): WeatherData {
        val response = jsonParser.decodeFromString<WeatherApiResponse>(json)
        val forecast = response.forecast.forecastday

        return WeatherData(
            city = response.location.name,
            created_at = response.location.localtime.substringBefore(" "),
            today_temperature = forecast[0].day.avgtemp_c.toString(),
            today_rain = forecast[0].day.totalprecip_mm.toString(),
            today_wind = forecast[0].day.maxwind_kph.toString(),
            tomorrow_temperature = forecast[1].day.avgtemp_c.toString(),
            tomorrow_rain = forecast[1].day.totalprecip_mm.toString(),
            tomorrow_wind = forecast[1].day.maxwind_kph.toString(),
            day_after_temperature = forecast[2].day.avgtemp_c.toString(),
            day_after_rain = forecast[2].day.totalprecip_mm.toString(),
            day_after_wind = forecast[2].day.maxwind_kph.toString()
        )
    }
}

@Serializable
data class WeatherApiResponse(
    val location: Location,
    val forecast: Forecast
)

@Serializable
data class Location(
    val name: String,
    val localtime: String
)

@Serializable
data class Forecast(
    val forecastday: List<ForecastDay>
)

@Serializable
data class ForecastDay(
    val date: String,
    val day: Day
)

@Serializable
data class Day(
    val avgtemp_c: Double,
    val maxwind_kph: Double,
    val totalprecip_mm: Double
)