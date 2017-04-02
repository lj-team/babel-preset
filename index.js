const es2015 = require('babel-preset-es2015')
const es2016 = require('babel-preset-es2016')
const es2017 = require('babel-preset-es2017')
const react = require('babel-preset-react')

const moduleResolver = require('babel-plugin-module-resolver').default

const transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread')
const transformExponentiationOperator = require('babel-plugin-transform-exponentiation-operator')

module.exports = function (context, opts) {
  var modules
  var alias

  if (opts && opts.modules) modules = opts.modules
  if (opts && opts.alias) alias = opts.alias

  return {
    presets: [
      modules && [es2015, { modules: modules }],
      !modules && es2015,
      es2016,
      es2017,
      react
    ].filter(Boolean),
    plugins: [
      alias && [moduleResolver, { alias: alias }],
      transformObjectRestSpread,
      transformExponentiationOperator
    ].filter(Boolean)
  }
}
