package service

import model.WeatherData
import okhttp3.OkHttpClient
import okhttp3.Request
import databaseConnector.DatabaseConnector
import utils.WeatherApiMapper

object WeatherService {
    private val client = OkHttpClient()
    private val weatherApiUrl = System.getenv("WEATHER_API_URL") ?: "http://weather-api:8080"

    fun fetchWeather(city: String): WeatherData {
        val url = "$weatherApiUrl/weather?city=$city"
        val request = Request.Builder().url(url).build()

        client.newCall(request).execute().use { response ->
            if (!response.isSuccessful) throw RuntimeException("Failed to fetch weather")

            val body = response.body?.string() ?: throw RuntimeException("Empty response")

            return WeatherApiMapper.parseWeatherResponse(body)
        }
    }

    fun saveWeather(data: WeatherData) {
        DatabaseConnector.save(data)
    }

    fun getWeatherFromDB(city: String? = null): List<WeatherData> {
        return DatabaseConnector.get(city)
    }
}