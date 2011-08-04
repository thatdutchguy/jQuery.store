jQuery.store
============

A tiny little key/value store that uses the HTML5 localStorage feature if 
available, and otherwise falls back to jQuery.cookie (you have to include 
this yourself, find it at: https://github.com/carhartl/jquery-cookie)


Usage
-----

    $.store.set('foo', 'bar')
    $.store.get('foo') // => 'bar'
    $.store.remove('foo')
    $.store.get('foo') // => null

