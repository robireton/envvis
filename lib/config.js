import env from '@robireton/environment'

const config = {
  production: (process.env.NODE_ENV === 'production'),
  debug: (process.env.NODE_ENV === 'debug'),
  data: {
    co2: process.env.DATA_CO2 || 'http://localhost:3282/co2',
    temp: process.env.DATA_TEMP || 'http://localhost:3282/temp'
  },
  http: {
    port: env.parseInt('HTTP_PORT', 8080),
    host: process.env.HTTP_HOST || (process.env.NODE_ENV === 'production' ? undefined : 'localhost')
  },
  log: {
    stamp: env.parseBool('LOG_STAMP'),
    method: env.parseBool('LOG_METHOD'),
    path: env.parseBool('LOG_PATH'),
    ip: env.parseBool('LOG_IP'),
    ua: env.parseBool('LOG_UA')
  }
}

if (config.debug) console.debug(config)

export default config
