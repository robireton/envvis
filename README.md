# Environment Visualization · [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

visualization for environmental data using Highcharts

## Config

environment variable | description | default
--- | --- | ---
HTTP_HOST | network interface to bind to | *undefined*
HTTP_PORT | TCP port to listen on | 3282
DATA_CO2 | where to get CO₂ data | http://localhost:3282/co2
DATA_TEMP | where to get temperature data | http://localhost:3282/temp
LOG_STAMP | include timestamp in request log | false
LOG_METHOD | include request method in log | false
LOG_PATH | include request path in log | false
LOG_IP | include requester address in log | false
LOG_UA | include user agent string in request log | false
