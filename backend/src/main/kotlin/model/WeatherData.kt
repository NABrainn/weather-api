package model

import kotlinx.serialization.Serializable

@Serializable
data class WeatherData(
    val city: String,
    val today_temperature: String,
    val today_rain: String,
    val today_wind: String,
    val tomorrow_temperature: String,
    val tomorrow_rain: String,
    val tomorrow_wind: String,
    val day_after_temperature: String,
    val day_after_rain: String,
    val day_after_wind: String,
    val created_at: String
)


