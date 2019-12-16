const api = require('./api/v1')
const apiGen = require('./apigen')
const processArgs = require('./process-args')

const AlaApi = function(config) {
  return apiGen('v1', api, config)
}

Object.assign(
  AlaApi,
  {
    processArgs,
    api,

    /** @deprecated */
    Testnet: function (config) {
      console.error('deprecated, change AlaApi.Testnet(..) to just AlaApi(..)')
      return AlaApi(config)
    },

    /** @deprecated */
    Localnet: function (config) {
      console.error('deprecated, change AlaApi.Localnet(..) to just AlaApi(..)')
      return AlaApi(config)
    }
  }
)

module.exports = AlaApi
