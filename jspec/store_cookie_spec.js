script('../ext/jquery-1.6.2.min.js')

$.cookie = {}

script('../lib/jquery.store.js')

describe('jQuery.storage', function() {
  beforeEach(function() {
    $.cookie = jasmine.createSpy('cookie')
  })
  
  describe("setting", function() {
    beforeEach(function() {
      $.store.set('foo', 'bar')
    })
    
    it("uses cookie", function() {
      expect($.cookie).toHaveBeenCalledWith('foo', 'bar', jasmine.any(Object))
    })
  })
  describe("getting", function() {
    beforeEach(function() {
      $.store.get('foo')
    })
    
    it("uses cookie", function() {
      expect($.cookie).toHaveBeenCalledWith('foo')
    })
  })
  describe("removing", function() {
    beforeEach(function() {
      $.store.remove('foo')
    })
    
    it("uses cookie", function() {
      expect($.cookie).toHaveBeenCalledWith('foo', null)
    })
  })
  
})