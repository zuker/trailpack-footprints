'use strict'

const _ = require('lodash')
const assert = require('assert')

describe('Router Trailpack', () => {

  describe('#initialize', () => {
    it('should include footprint routes in app.routes', () => {
      const routes = global.app.routes

      assert.equal(routes.length, 1)
      assert.equal(routes[0].method, 'GET')
    })
    it('should bind route handler to controller method', () => {
      const routes = global.app.routes

      assert(_.isFunction(routes[0].handler))
    })
    it('should attach prerequisite methods', () => {
      const routes = global.app.routes

      assert(_.isFunction(routes[0].config.pre[0]))
    })
  })
})
