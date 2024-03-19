'use strict'

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')

// Pass --options via CLI arguments in command to enable these options.
const options = {}

module.exports = async function (fastify, opts) {
  // Register Swagger and Swagger UI
  fastify.register(require('@fastify/swagger'))
  fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs'
  })

  // Register shared schema
  fastify.addSchema({
    $id: 'shared',
    type: 'object',
    definitions: {
      genericQueryString: {
        type: 'object',
        properties: {
          order: { type: 'string', description: 'Order by a specific field' },
          limit: { type: 'number', description: 'Limit the results' },
        }
      }
    }
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

module.exports.options = options
