import express from 'express'
import config from './config.js'
import chrono from '@robireton/chrono'

const router = express.Router()

// Logging and setup
router.all('*', (req, res, next) => {
  res.set('X-UA-Compatible', 'IE=edge')
  const fields = []
  if (config.log.stamp) fields.push(chrono.timestamp())
  if (config.log.method) fields.push(req.method)
  if (config.log.path) fields.push(req.path)
  if (config.log.ip) fields.push(req.ip)
  if (config.log.ua) fields.push(req.get('user-agent') || '')
  if (fields.length) console.log(fields.join('\t'))

  req.proxyBase = req.get('x-script-name') || ''

  next()
})

router.get('/', (req, res, _next) => {
  res.render('chart', {
    page_title: 'CO₂ & Temperature Monitor',
    base_url: req.proxyBase,
    scripts: [`${req.proxyBase}/chart.js`],
    stylesheets: [`${req.proxyBase}/chart.css`],
    co2_url: config.data.co2,
    temp_url: config.data.temp
  })
})

router.get('/live', (req, res, _next) => {
  res.render('chart', {
    page_title: 'Live CO₂ & Temperature',
    base_url: req.proxyBase,
    scripts: [`${req.proxyBase}/live.js`],
    stylesheets: [`${req.proxyBase}/chart.css`],
    co2_url: config.data.co2,
    temp_url: config.data.temp
  })
})

export default router
