var form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    var newObject = {}
    newObject.name = form.name.value
    newObject.petName = form.petName.value
    newObject.favColour = form.favColour.value
    newObject.favCar = form.favCar.value
    newObject.goldeneye = form.goldeneye.value
    newObject.marketing = form.marketing.value
    newObject.receiveEmails = form.receiveEmails.value
    if (form.receiveEmails.value >= 1) { newObject.email = form.email.value }
    newObject.age = form.age.checked
    newObject.marioKart = form.marioKart.checked
    var jason = JSON.stringify(newObject)

    $.post('./post-jquery.php',
        jason,
        function(responseData) {
            console.log(JSON.parse(responseData).message)
        }
    )
})

$(function() {
    $('#optional').load('./part.html')
})
