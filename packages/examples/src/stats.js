'use strict'

const stats = require('../../stats')

require('./main')(async url => {
  const metrics = await stats(url)
  return metrics
})
