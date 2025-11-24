package usecase

import model.WeatherData
import service.WeatherService

object ReadFetchOrReadWeather {

    fun readFetchOrReadWeatherUseCase(city: String): WeatherData{
        val existing = WeatherService.getWeatherFromDB(city)
        println("existing: $existing")

        if (existing.isNotEmpty()) {
            return existing.first()
        } else {
            val fetched = WeatherService.fetchWeather(city)
            println("fetched: $fetched")
            WeatherService.saveWeather(fetched)
            return fetched
        }
    }
}