package databaseConnector

import model.WeatherData
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import java.time.LocalDate

object WeatherTable : Table("forecasts") {
    val id = integer("id").autoIncrement()
    val city = varchar("city", 255)
    val created_at = varchar("created_at", 255)
    val today_temperature = varchar("today_temperature", 255)
    val today_rain = varchar("today_rain", 255)
    val today_wind = varchar("today_wind", 255)
    val tomorrow_temperature = varchar("tomorrow_temperature", 255)
    val tomorrow_rain = varchar("tomorrow_rain", 255)
    val tomorrow_wind = varchar("tomorrow_wind", 255)
    val day_after_temperature = varchar("day_after_temperature", 255)
    val day_after_rain = varchar("day_after_rain", 255)
    val day_after_wind = varchar("day_after_wind", 255)

    override val primaryKey = PrimaryKey(id)
}

object DatabaseConnector {
    fun save(data: WeatherData) {
        transaction {
            WeatherTable.insert {
                it[city] = data.city
                it[created_at] = data.created_at
                it[today_temperature] = data.today_temperature
                it[today_rain] = data.today_rain
                it[today_wind] = data.today_wind
                it[tomorrow_temperature] = data.tomorrow_temperature
                it[tomorrow_rain] = data.tomorrow_rain
                it[tomorrow_wind] = data.tomorrow_wind
                it[day_after_temperature] = data.day_after_temperature
                it[day_after_rain] = data.day_after_rain
                it[day_after_wind] = data.day_after_wind
            }
        }
    }

    fun get(city: String? = null): List<WeatherData> {
        val today = LocalDate.now().toString() // yyyy-MM-dd

        return transaction {
            if (city != null) {
                val result = WeatherTable
                    .select { (WeatherTable.city eq city) and (WeatherTable.created_at eq today) }
                    .limit(1)
                    .toList()

                if (result.isEmpty()) emptyList()
                else result.map {
                    WeatherData(
                        city = it[WeatherTable.city],
                        created_at = it[WeatherTable.created_at],
                        today_temperature = it[WeatherTable.today_temperature],
                        today_rain = it[WeatherTable.today_rain],
                        today_wind = it[WeatherTable.today_wind],
                        tomorrow_temperature = it[WeatherTable.tomorrow_temperature],
                        tomorrow_rain = it[WeatherTable.tomorrow_rain],
                        tomorrow_wind = it[WeatherTable.tomorrow_wind],
                        day_after_temperature = it[WeatherTable.day_after_temperature],
                        day_after_rain = it[WeatherTable.day_after_rain],
                        day_after_wind = it[WeatherTable.day_after_wind]
                    )
                }
            } else {
                emptyList()
            }
        }
    }
}