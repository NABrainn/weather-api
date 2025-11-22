package usecase

import model.WeatherData
import service.WeatherService

object ReadFetchOrReadWeather {

    fun readFetchOrReadWeatherUseCase(city: String): WeatherData{
        val existing = WeatherService.getWeatherFromDB(city)

        if (existing.isNotEmpty()) {
            return existing.first()
        } else {
            val fetched = WeatherService.fetchWeather(city)
            WeatherService.saveWeather(fetched)
            return fetched
        }
    }
}