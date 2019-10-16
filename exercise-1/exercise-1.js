// Exercise 1

var people = [ 
    {name:'Cat', age:28},
    {name:'Fluff', age:10}, 
    {name:'Annabelle', age:19}, 
    {name:'Claris', age:25},
]

var exercise1Div = document.querySelector('.exercise1') 

exercise1Div.innerHTML += '<h1>First try:</h1>'

people.forEach( function(item) {
    exercise1Div.innerHTML += '<p data-age="' + item.age + '">' + item.name + '</p>'
})

exercise1Div.innerHTML += '<h1>Second try:</h1>'

people.forEach( function(item) {    
    var line = document.createElement('p')
    line.innerText = item.name
    line.dataset.age = item.age
    exercise1Div.appendChild(line)
})

exercise1Div.innerHTML += '<h1>Third try (with Rachmann):</h1>'

for(var x = 0; x < people.length; x++) {
    exercise1Div.innerHTML +='<p>' + people[x].name + '</p>'
}
var peopleP = document.querySelectorAll('p')
for(var x = 0; x < people.length; x++) {
    peopleP[x].dataset.age = people[x].age
}

exercise1Div.innerHTML += '<h1>Sam\'s try:</h1>'

people.forEach(function(person) {
    exercise1Div.innerHTML += '<p class="person">' + person.name + '</p>'
    var allThePTags = document.querySelectorAll('.person')
    var currentPTag = allThePTags[allThePTags.length - 1]
    currentPTag.dataset.age = person.age
})
