$(document).ready(function() {
    // do something when the DOM has loaded
    console.log('Page ready - long form')
})

$(function () {
    // also means do something when the DOM has loaded - short version
    console.log('Page ready - $ syntax')
})

$('#thing')
// is the same as document.querySelector('#thing')

$.ajax('url') 
$.get('url')
// a GET

$.ajax('url', {
    method: 'post',
    data: {
        key: 'value'
    }
}) 
$.post('url', { key: 'value' })
// a POST

$.ajax('url', {
    method: 'post',
    data: {
        key: 'value'
    },
    success: function(responseData) {
        //do something to responseData
    }
}) 
// a POST that does something in response to getting data back

$('.unicorn').load('url.html')
// loads an html file from somewhere else and replaces the selected elements' innerHTML with it
// does this without totally reloading the page - just jams new stuff into the DOM

$('.click-me').on('click', function() {
    // This is the same as the addEventListener(), but for jQuery objects
})
// note the class selector - does it to multiple objects at once

$('#click-me').click(function() {
    // This is a bit of a shortcut for jQuery objects that have a click event already
})

$('#thing').text('text content')
// short way to set the text content

$('#thing').append(' some text')
// short way to add something to the end of the text content
// there is also .prepend()

$('#thing').before('<p>text content</p>')
// puts html directly before the selected element (rather than inside)
// creates a previous sibling
// also insertBefore()
// insertAfter(), after()

$('#thing').remove()
// removes the selected element from the DOM

$('#hide-me').hide()
// hides selected element (by applying css display: none;)
// reversed by .show()
