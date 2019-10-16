var form = document.querySelector('form')
//console.log(form)
form[0].setAttribute('id', 'requiredField')
form[1].setAttribute('id', 'maxLength8')
form[2].setAttribute('id', 'requiredMinMax')
form[3].setAttribute('id', 'notRequiredMinMax')
form[4].setAttribute('id', 'lettersOnly')
form[5].setAttribute('id', 'requiredRadio')
form[6].setAttribute('id', 'requiredRadio')
form[7].setAttribute('id', 'requiredConditional')
form[9].setAttribute('id', 'optionalEmail')

form.requiredField.setAttribute('required', 'required')
form.requiredMinMax.setAttribute('required', 'required')

form.maxLength8.setAttribute('maxlength', '8')

form.requiredMinMax.setAttribute('minlength', '10')
form.requiredMinMax.setAttribute('maxlength', '25')

form.notRequiredMinMax.setAttribute('minlength', '10')
form.notRequiredMinMax.setAttribute('maxlength', '25')

form.lettersOnly.setAttribute('pattern', '[a-zA-Z]+')

//email type field does this automatically
//form.optionalEmail.setAttribute('pattern', '^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$')

document.querySelector('#lettersOnly').addEventListener('keydown', function(e) {
    const regex = RegExp('[a-zA-Z]')
    if ( !regex.test(e.key) ) {
        e.preventDefault()
    }
})

var reqRadio = function() {
    if(form.requiredRadio.value > 0) {
        form.requiredConditional.setAttribute('required', 'required')
    } else {
        form.requiredConditional.removeAttribute('required')
    }
}
reqRadio()

document.querySelector('.radio').addEventListener('change', function() {
    reqRadio()
})

form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('You submitted!')
    // clear everything
    form.requiredField.value = ''
    form.maxLength8.value = ''
    form.requiredMinMax.value = ''
    form.notRequiredMinMax.value = ''
    form.lettersOnly.value = ''
    document.querySelectorAll('input[type="radio"]').forEach( function(radiobox) {
        radiobox.checked = false
    })
    form.requiredConditional.value = ''
    form.optionalEmail.value = ''
})