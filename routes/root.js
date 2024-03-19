'use strict'

module.exports = async function (fastify, opts) {

  // here we use the $ref to the shared schema
  fastify.get('/',
    {
      schema: {
        description: 'Root example',
        querystring: {
          $ref: 'shared#/definitions/genericQueryString',
        },
        response: {
          200: {
            type: 'object',
            description: 'Root example',
            properties: {
              root: {
                type: 'boolean',
                description: 'Root example',
              }
            }
          }
        }
      }
    },
    async function (request, reply) {
      return { root: true }
  })
}
