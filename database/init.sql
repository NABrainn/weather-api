CREATE TABLE IF NOT EXISTS forecasts (
    id SERIAL PRIMARY KEY,
    city VARCHAR(255),
    created_at VARCHAR(255),
    today_temperature VARCHAR(255),
    today_rain VARCHAR(255),
    today_wind VARCHAR(255),
    tomorrow_temperature VARCHAR(255),
    tomorrow_rain VARCHAR(255),
    tomorrow_wind VARCHAR(255),
    day_after_temperature VARCHAR(255),
    day_after_rain VARCHAR(255),
    day_after_wind VARCHAR(255)
);
