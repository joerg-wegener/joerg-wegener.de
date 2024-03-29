'use strict'

import createServer from './createServer.js'

const app = createServer()

const server = app.listen('80', () => {
  console.log('Application started...')
})

process.on('SIGINT', () => {
  server.close(() => {
    process.exit(0)
  })
})

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0)
  })
})
