var deck = function() {
    var suits = ['spades', 'diamonds', 'clubs', 'hearts']
    var faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
    var values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    var newDeck = []
    suits.forEach( function(suit) {
        var i = 0
        faces.forEach( function(face) {
            newDeck.push( {
                suit: suit, 
                face: face, 
                value: values[i]
            })
            i++
        })
    })
    return newDeck
}()

function Player(name) {
    this.name = name
    this.hand = []
    this.score = function() {
        var sum = 0
        this.hand.forEach( function(card) {
            sum += card.value
        })
        return sum
    }
}

function deal(theDeck) {
    var newHand = []
    newHand.push(theDeck.splice(Math.floor(Math.random() * theDeck.length), 1)[0])
    newHand.push(theDeck.splice(Math.floor(Math.random() * theDeck.length), 1)[0])
    return newHand
}

function whoWon(player1, player2) {
    if (playerOne.score() > playerTwo.score() && playerOne.score() < 22) {
        return playerOne.name + ' wins!'
    } else if (playerTwo.score() > playerOne.score() && playerTwo.score() < 22) {
        return playerTwo.name + ' wins!'
    } else {
        return 'Draw!'
    }
}

var playerOne = new Player('Player 1')
playerOne.hand = deal(deck)
var playerTwo = new Player('Player 2')
playerTwo.hand = deal(deck)

//build the page
var page = document.querySelector('.player-flex')
page.innerHTML += '<div class="player"><h1>' + playerOne.name + ' drew: </h1>'
    + '<div class="card ' + playerOne.hand[0].face + ' ' + playerOne.hand[0].suit + '"><span></span></div>'
    + '<div class="card ' + playerOne.hand[1].face + ' ' + playerOne.hand[1].suit + '"><span></span></div>'
    + '<h1>' + playerOne.name + ' scored:' + (playerOne.score()) + '</h1></div>' 
page.innerHTML += '<div class="player"><h1>' + playerTwo.name + ' drew: </h1>'
    + '<div class="card ' + playerTwo.hand[0].face + ' ' + playerTwo.hand[0].suit + '"><span></span></div>'
    + '<div class="card ' + playerTwo.hand[1].face + ' ' + playerTwo.hand[1].suit + '"><span></span></div>'
    + '<h1>' + playerTwo.name + ' scored:' + (playerTwo.score()) + '</h1></div>' 

var resultArea = document.querySelector('.result')
resultArea.innerHTML += '<h1>' + whoWon(playerOne.name, playerTwo.name) + '</h1>'