const exists = require('./exists')

function last (item) {
  let val
  if (exists(item && item.length) && typeof item !== 'function') {
    val = item[item.length - 1]
  } else {
    val = (item && item.toString) ? last(item.toString()) : undefined
  }
  return val
}

module.exports = last
