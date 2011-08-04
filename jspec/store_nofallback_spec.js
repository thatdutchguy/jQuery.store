script('../ext/jquery-1.6.2.min.js')

describe('jQuery.storage', function() {
  it("fails when both localStorage or jQuery.cookie are unavailable", function() {
    var error = null
    try {
      script('../lib/jquery.store.js')
    }
    catch (e) {
      error = e
    }
    expect(error).not.toEqual(null)
  })

})