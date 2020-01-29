function pipe(...funcs) {
  return function(value) {
    return funcs.reduce((value, func) => func(value), value)
  }
}

function pipeWith(arg, ...fns) {
  return pipe(...fns)(arg)
}

const peek = array => array[0]
const pop = array => array.pop()

module.exports = {
  pipe,
  pipeWith,
  peek,
  pop
}
