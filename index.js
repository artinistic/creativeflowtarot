function card(name, description, image){
    this.name = name;
    this.description = description;
    this.image = image;
}
var deck = [
    new card ('Ace of Swords', 'The Ace of Swords', 'aceofswords'),
    new card ('Two of Swords', 'The Two of Swords', 'twoofswords'),
    new card ('Three of Swords', 'The Three of Swords', 'threeofswords'),
    new card ('Four of Swords', 'The Four of Swords', 'fourofswords'),
    new card ('Five of Swords', 'The Five of Swords', 'fiveofswords'),
    new card ('Six of Swords', 'The Six of Swords', 'sixofswords'),
    new card ('Seven of Swords', 'The Seven of Swords', 'sevenofswords'),
    new card ('Eight of Swords', 'The Eight of Swords', 'eightofswords'),
    new card ('Nine of Swords', 'The Nine of Swords', 'nineofswords'),
    new card ('Ten of Swords', 'The Ten of Swords', 'tenofswords'),
    new card ('Knight of Swords', 'The Knight of Swords', 'knightofswords'),
    new card ('Spirit of Swords', 'The Spirit of Swords', 'spiritofswords'),
    new card ('Goddess of Swords', 'The Goddess of Swords', 'goddessofswords'),
    new card ('God of Swords', 'The God of Swords', 'godofswords'),
    new card ('Ace of Wands', 'The Ace of Wands', 'aceofwands'),
    new card ('Two of Wands', 'The Two of Wands', 'twoofwands'),
    new card ('Three of Wands', 'The Three of Wands', 'threeofwands'),
    new card ('Four of Wands', 'The Four of Wands', 'Fourofwands'),
    new card ('Five of Wands', 'The Five of Wands', 'Fiveofwands'),
    new card ('Six of Wands', 'The Six of Wands', 'Sixofwands'),
    new card ('Seven of Wands', 'The Seven of Wands', 'Sevenofwands'),
];

function getRandom(num){
    var randomNumber = 
    Math.floor(Math.random() * num);
    return randomNumber;
}

document.getElementById("DisplayReading").onclick
=function(){
    var index = getRandom(23);
    var currentCard = deck[index];

    document.getElementById("display").innerHTML = 
    '<img src="/Web/' + currentCard.image + '.jpg">';

    document.getElementById("displayName").innerHTML = 
    '<h2>' + currentCard.name + '</h2>' + '<p>' + '<body>' + currentCard.description + '</body>' + '</p>';
}