const es2015 = require('babel-preset-es2015')
const es2016 = require('babel-preset-es2016')
const es2017 = require('babel-preset-es2017')
const react = require('babel-preset-react')

const moduleResolver = require('babel-plugin-module-resolver').default

const transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread')
const transformExponentiationOperator = require('babel-plugin-transform-exponentiation-operator')

module.exports = function (context, opts) {
  var modules
  if (opts && opts.modules) modules = opts.modules

  const alias = {
    common: './common'
  }

  return {
    presets: [
      modules && [es2015, { modules: modules }],
      !modules && es2015,
      es2016,
      es2017,
      react
    ].filter(Boolean),
    plugins: [
      [moduleResolver, { alias: alias }],
      transformObjectRestSpread,
      transformExponentiationOperator
    ].filter(Boolean)
  }
}
