var exists = require('./exists')

function isObject (val) {
  return typeof val === 'object' && exists(val) &&
    !Array.isArray(val) &&
    !(val instanceof RegExp) &&
    !(val instanceof String) &&
    !(val instanceof Number)
}

module.exports = isObject
