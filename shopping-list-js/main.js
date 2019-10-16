var initialList = [
    'bean',
    'snail',
    'peach'
]

function addItem(item) {
    var $newItem
    $('#list-container').append(
        $newItem = $('<div></div>')
        .addClass('list-item')
        .text(item)
    )
    $newItem.slideDown()
    $newItem.on('click', function() {
        $newItem.css('text-decoration', 'line-through')
        $newItem.fadeOut('slow', function() {
            $newItem.remove()
        })
    })
}

function initList() {
    var list = document.querySelector('#list-container')
    list.innerHTML = ''
    initialList.forEach( function(item) {
        addItem(item)
    })
}

var form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (typeof(form.newItem.value) === 'string' && form.newItem.value != '') {
        addItem(form.newItem.value)
    }
    form.newItem.value = ''
}) 

var $colorSteps = [
    jQuery.Color('rgb(208,83,85)'),
    jQuery.Color('rgb(254,197,116)'),
    jQuery.Color('rgb(130,223,120)'),
    jQuery.Color('rgb(70,155,252)'),
    jQuery.Color('rgb(244,132,252)')
]
var colorShiftTime = 3000

function color1() {
    $heady.animate({
        backgroundColor: $colorSteps[0]
    }, colorShiftTime, 'linear', color2)
}

function color2() {
    $heady.animate({
        backgroundColor: $colorSteps[1]
    }, colorShiftTime, 'linear', color3)
}

function color3() {
    $heady.animate({
        backgroundColor: $colorSteps[2]
    }, colorShiftTime, 'linear', color4)
}

function color4() {
    $heady.animate({
        backgroundColor: $colorSteps[3]
    }, colorShiftTime, 'linear', color5)
}

function color5() {
    $heady.animate({
        backgroundColor: $colorSteps[4]
    }, colorShiftTime, 'linear', color1)
}

var $heady = $('.header')

$heady.animate({
    backgroundColor: $colorSteps[1]
}, colorShiftTime, 'linear', color3)

initList()