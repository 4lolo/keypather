const isObject = require('./is-object')
const exists = require('./exists')

function defaults (target, source, deep) {
  if (arguments.length === 1) {
    source = target
    return function (target) {
      return defaults(target, source)
    }
  } else if (typeof source === 'boolean') {
    deep = source
    source = target
    return function (target) {
      return defaults(target, source, deep)
    }
  }
  target = target || {}
  deep = deep || false
  if (!source) {
    return target
  }
  return reduceObject(target, source, deep)
}

function reduceObject (target, source, deep) {
  return Object.keys(source).reduce(function (target, key) {
    if (isObject(target[key]) && isObject(source[key]) && deep) {
      reduceObject(target[key], source[key])
      return target
    }
    target[key] = exists(target[key]) ? target[key] : source[key]
    return target
  }, target)
}

module.exports = defaults
