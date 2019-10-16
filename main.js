var shopping = ['milk', 'eggs', 'lettuce']
shopping.forEach( function(item) {
    console.log(item)
    })

console.log(shopping) // -> contents of array listed nicely

console.log(typeof shopping) // -> object

console.log(5 + "5") // -> 55 -> + does string concatenation AND addition

console.log("5" + 5) // -> 55

console.log(parseInt('5') + 5) // => 10

var contactUs = document.getElementById('contact-us')

contactUs.textContent = 'Meow'

var searchBars = document.getElementsByClassName('search-bar') // Returns all the search-bars as an HTMLCollection

console.log(searchBars)

// HTMLCollection does not have foreach so we need to write a cumbersome for loop the old way
for( x = 0; x < searchBars.length; x++ ) {
    searchBars[x].style.background = '#171412'
}

var allTheDivs = document.querySelectorAll('div') // Returns all the divs as a NodeList

console.log(allTheDivs)

allTheDivs.forEach( function(item) {
    item.textContent = 'Waaa!'
    item.style.color = '#dddddd'
})

var justOneDiv = document.querySelector('div') // Returns the first matching element

console.log(justOneDiv)

justOneDiv.style.fontSize = '2.2rem';
justOneDiv.innerHTML += '<p>This text came from JavaScript land</p>'

function sayHiToSomePeople(people) {
    var newPeople = people
    newPeople[0] = 'Felix'
    return newPeople
}

var students = ['Liz', 'Tom', 'Cat']
console.log(students)
var alteredStudents = sayHiToSomePeople(students)
console.log(students)
console.log(alteredStudents)