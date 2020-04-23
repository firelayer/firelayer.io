import * as functions from 'firebase-functions'

let config = functions.config()

if (process.env.NODE_ENV !== 'production') {
  const fs = require('fs-extra')

  if (fs.existsSync('./src/env.json')) {
    const env = require('./env.json')

    config = { env }
  }
}

export default config.env
