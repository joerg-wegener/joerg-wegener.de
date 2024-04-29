'use strict'

import createServer from './createServer.js'

const app = createServer()

const server = app.listen('8000', 'localhost', () => {
  console.log('Application started...')
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('terminating...')
    process.exit(0)
  })
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('terminating...')
    process.exit(0)
  })
})
