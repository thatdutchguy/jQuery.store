; // simple key value store that falls back to using jquery.cookie
(function($, undefined) {

  function hasLocalStorage() {
    try { 
      return 'localStorage' in window && window['localStorage'] !== null; 
    } 
    catch(e) { 
      return false
    }
  }
  
  function hasCookie() {
    return ('cookie' in $)
  }
  
  function localStorageProxy() {
    return {
      set: function(k, v) {
        return localStorage.setItem(k, v)
      },
      get: function(k) {
        return localStorage.getItem(k)
      },
      remove: function(k) {
        return localStorage.removeItem(k)
      }
    }
  }
  
  function cookieProxy() {
    var options = { expires: 365, path: '/' }
    return {
      set: function(k, v) {
        return $.cookie(k, v, options)
      },
      get: function(k) {
        return $.cookie(k)
      },
      remove: function(k) {
        return $.cookie(k, null)
      }
    }
  }
  
  function setup() {
    if (hasLocalStorage()) {
      return localStorageProxy()
    } else if(hasCookie()) {
      return cookieProxy()
    } else {
      throw new Error('HTML5 localStorage not supported, jQuery.store requires jQuery.cookie for fallback functionality.')
    }
  }
  
  $.store = setup()
  $.store.version = "0.0.1"
  
})(jQuery)
;
