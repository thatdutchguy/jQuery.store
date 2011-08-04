script('../ext/jquery-1.6.2.min.js')

window.localStorage = {}

script('../lib/jquery.store.js')

describe('jQuery.storage', function() {
  beforeEach(function() {
    window.localStorage.setItem = jasmine.createSpy('localStorage set')
    window.localStorage.getItem = jasmine.createSpy('localStorage set')
    window.localStorage.removeItem = jasmine.createSpy('localStorage set')
  })
  
  describe("setting", function() {
    beforeEach(function() {
      $.store.set('foo', 'bar')
    })
    
    it("uses localStorage", function() {
      expect(window.localStorage.setItem).toHaveBeenCalledWith('foo', 'bar')
    })
  })
  describe("getting", function() {
    beforeEach(function() { 
      $.store.get('foo')
    })
    
    it("uses localStorage", function() {
      expect(window.localStorage.getItem).toHaveBeenCalledWith('foo')
    })
  })
  describe("removing", function() {
    beforeEach(function() {
      $.store.remove('foo')
    })
    
    it("uses localStorage", function() {
      expect(window.localStorage.removeItem).toHaveBeenCalledWith('foo')
    })
  })
  
})