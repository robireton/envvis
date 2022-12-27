import * as environment from '@robireton/environment'

const config = {
  production: (process.env.NODE_ENV === 'production'),
  debug: (process.env.NODE_ENV === 'debug'),
  data: {
    co2: process.env.DATA_CO2 || 'http://localhost:3282/co2',
    temp: process.env.DATA_TEMP || 'http://localhost:3282/temp'
  },
  http: {
    port: environment.parseInt('HTTP_PORT', 8080),
    host: process.env.HTTP_HOST || (process.env.NODE_ENV === 'production' ? undefined : 'localhost')
  },
  log: {
    stamp: environment.parseBool('LOG_STAMP'),
    method: environment.parseBool('LOG_METHOD'),
    path: environment.parseBool('LOG_PATH'),
    ip: environment.parseBool('LOG_IP'),
    ua: environment.parseBool('LOG_UA')
  }
}

if (config.debug) console.debug(config)

export default config
