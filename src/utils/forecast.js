const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=afaf416445a4e19f05ccbb308b1c0482&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.current.temperature + ' degress out. It is ' + body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast