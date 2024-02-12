import path from 'node:path'
import url from 'node:url'
import express from 'express'

export default function () {
  const app = express()

  app.use('/tom', (req, res) => {
    res.send('Hello')
  })

  const distDir = path.join(
    path.dirname(url.fileURLToPath(import.meta.url)),
    '..',
    'dist',
  )
  app.use(express.static(distDir))

  return app
}
