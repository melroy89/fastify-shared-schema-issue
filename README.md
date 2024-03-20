# Reproducible git repo for Fastify shared schema issue

Default Fastify Swagger is using OpenAPI v2, here is the bug present. When using OpenAPI v3 spec, the error below does no longer appears.

See code: `app.js` & `routes/root.js`

---


1. `npm install`
2. `npm run dev`
3. Go to: http://127.0.0.1:3000/docs
4. Error:

```js
err: {
      "type": "TypeError",
      "message": "Cannot create property 'in' on string 'object'",
      "stack":
          TypeError: Cannot create property 'in' on string 'object'
              at toSwaggerProp (/home/melroy/fastify-swagger-ref-issue/node_modules/@fastify/swagger/lib/spec/swagger/utils.js:120:30)
              at /home/melroy/fastify-swagger-ref-issue/node_modules/@fastify/swagger/lib/spec/swagger/utils.js:153:14
              at Array.map (<anonymous>)
              at plainJsonObjectToSwagger2 (/home/melroy/fastify-swagger-ref-issue/node_modules/@fastify/swagger/lib/spec/swagger/utils.js:152:6)
              at resolveCommonParams (/home/melroy/fastify-swagger-ref-issue/node_modules/@fastify/swagger/lib/spec/swagger/utils.js:204:15)
              at prepareSwaggerMethod (/home/melroy/fastify-swagger-ref-issue/node_modules/@fastify/swagger/lib/spec/swagger/utils.js:291:29)
              at Object.swagger (/home/melroy/fastify-swagger-ref-issue/node_modules/@fastify/swagger/lib/spec/swagger/index.js:49:29)
              at fastify.route.handler (/home/melroy/fastify-swagger-ref-issue/node_modules/@fastify/swagger-ui/lib/routes.js:175:28)
              at preHandlerCallback (/home/melroy/fastify-swagger-ref-issue/node_modules/fastify/lib/handleRequest.js:137:37)
              at validationCompleted (/home/melroy/fastify-swagger-ref-issue/node_modules/fastify/lib/handleRequest.js:121:5)
    }
```
