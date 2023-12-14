const focusButton = document.getElementById('focusButton');
const targetSection = document.getElementById('section7');

focusButton.addEventListener('click', function() {
  // Toggle the 'visible' class on the target section
  targetSection.classList.toggle('visible');
});

// Function to get a random card image from the list
    function getRandomCardImage() {
        const cardImages = [
            '/images/wands/aceofwands.jpg', '/images/wands/twoofwands.jpg', 
            '/images/wands/threeofwands.jpg', '/images/wands/fourofwands.jpg', 
            '/images/wands/fiveofwands.jpg', '/images/wands/sixofwands.jpg', 
            '/images/wands/sevenofwands.jpg', '/images/wands/eightofwands.jpg',
            '/images/wands/nineofwands.jpg', '/images/wands/tenofwands.jpg', 
            '/images/wands/spiritofwands.jpg', '/images/wands/knightofwands.jpg', 
            '/images/wands/goddessofwands.jpg', '/images/wands/godofwands.jpg',
            '/images/stars/aceofstars.jpg', '/images/stars/twoofstars.jpg', 
            '/images/stars/threeofstars.jpg', '/images/stars/fourofstars.jpg', 
            '/images/stars/fiveofstars.jpg', '/images/stars/sixofstars.jpg', 
            '/images/stars/sevenofstars.jpg', '/images/stars/eightofstars.jpg',
            '/images/stars/nineofstars.jpg', '/images/stars/tenofstars.jpg', 
            '/images/stars/spiritofstars.jpg', '/images/stars/knightofstars.jpg', 
            '/images/stars/goddessofstars.jpg', '/images/stars/godofstars.jpg',
            '/images/stones/aceofstones.jpg', '/images/stones/twoofstones.jpg', 
            '/images/stones/threeofstones.jpg', '/images/stones/fourofstones.jpg', 
            '/images/stones/fiveofstones.jpg', '/images/stones/sixofstones.jpg', 
            '/images/stones/sevenofstones.jpg', '/images/stones/eightofstones.jpg',
            '/images/stones/nineofstones.jpg', '/images/stones/tenofstones.jpg', 
            '/images/stones/spiritofstones.jpg', '/images/stones/knightofstones.jpg', 
            '/images/stones/goddessofstones.jpg', '/images/stones/godofstones.jpg',
            '/images/swords/aceofswords.jpg', '/images/swords/twoofswords.jpg', 
            '/images/swords/threeofswords.jpg', '/images/swords/fourofswords.jpg', 
            '/images/swords/fiveofswords.jpg', '/images/swords/sixofswords.jpg', 
            '/images/swords/sevenofswords.jpg', '/images/swords/eightofswords.jpg',
            '/images/swords/nineofswords.jpg', '/images/swords/tenofswords.jpg', 
            '/images/swords/spiritofswords.jpg', '/images/swords/knightofswords.jpg', 
            '/images/swords/goddessofswords.jpg', '/images/swords/godofswords.jpg',
            '/images/forces/1-theinnerchild.jpg', '/images/forces/2-ImaginationStation.jpg', 
            '/images/forces/3-MindsEye.jpg', '/images/forces/4-MotherNature.jpg', 
            '/images/forces/5-TheMoonTarotCard.jpg', '/images/forces/6-TheMessenger.jpg', 
            '/images/forces/7-TheLovers.jpg', '/images/forces/8-PurposetheCreators.jpg',
            '/images/forces/9-TheHermitStarryEyedSloth.jpg', '/images/forces/10-WindsofFortune.jpg', 
            '/images/forces/11-Justice.jpg', '/images/forces/12-HangManhero.jpg', 
            '/images/forces/13-Death.jpg', '/images/forces/14-Harmony.jpg',
            '/images/forces/15-Strength.jpg',
            '/images/forces/16-Judgment.jpg', '/images/forces/17-Devil.jpg', 
            '/images/forces/18-Destruction.jpg', '/images/forces/19-TheLightningStorm.jpg', 
            '/images/forces/21-Constellations.jpg', '/images/forces/22-WorldMultiverse.jpg', 
            '/images/forces/20-TheSun.jpg',
            // ... (repeat for each card)
        ];
        return cardImages[Math.floor(Math.random() * cardImages.length)];
    }

    // Function to update the top card of a pile
    function updateTopCard(pileId) {
        const pile = document.getElementById(pileId);
        const topCard = pile.querySelector('.card');

        // Change the card image with 60% scale
        topCard.innerHTML = `<img style="width: 50%" src="${getRandomCardImage()}" alt="Tarot Card">`;

    }

    // Interval to switch pile 1 every 3 seconds
    setInterval(() => {
        updateTopCard('pile1');
    }, 3000);

    // Interval to switch pile 2 every 2 seconds
    setInterval(() => {
        updateTopCard('pile2');
    }, 2000);

    // Interval to switch pile 3 every 4 seconds
    setInterval(() => {
        updateTopCard('pile3');
    }, 4000);

    // Interval to switch pile 3 every 4 seconds
    setInterval(() => {
        updateTopCard('pile4');
    }, 3500);

    // Initialize the piles
    const piles = document.querySelectorAll('.card-pile');

    piles.forEach(pile => {
        // Create initial card for each pile
        pile.innerHTML += `<div class="card"><img style="width: 50%" src="${getRandomCardImage()}" alt="Tarot Card"></div>`;
    });  


const wandsicon = document.querySelectorAll('.wands-icons i')

setInterval(() => {

    const wandsicon = document.querySelector('.wands-icons .change'
    )
    wandsicon.classList.remove('change')

}, 500)

const starsicon = document.querySelectorAll('.stars-icons i')

setInterval(() => {

    const starsicon= document.querySelector('.stars-icons .change'
    )
    starsicon.classList.remove('change')

}, 500)

const stonesicon = document.querySelectorAll('.stones-icons i')

setInterval(() => {

    const stonesicon= document.querySelector('.stones-icons .change'
    )
    stonesicon.classList.remove('change')

}, 500)

const swordsicon = document.querySelectorAll('.swords-icons i')

setInterval(() => {

    const swordsicon= document.querySelector('.swords-icons .change'
    )
    swordsicon.classList.remove('change')

}, 500)

const forcesicon = document.querySelectorAll('.forces-icons i')

setInterval(() => {

    const forcesicon= document.querySelector('.forces-icons .change'
    )
    forcesicon.classList.remove('change')

}, 500)


function pileWands() {
    // Select all the wand icons within the .wands-icons container
    var wandIcons = document.querySelectorAll('.wands-icons i img'); // Update the selector

    // Remove the absolute positioning to allow for centering within section2
    var wandsContainer = document.querySelector('.wands-icons');
    wandsContainer.style.position = 'relative';
    wandsContainer.style.margin = '20';
    wandsContainer.style.transition = 'transform 1s';

    // Add a class to the wands container to enable flex layout
    wandsContainer.classList.add('piled');

    // Calculate the rotation angle for each card
    var rotationAngle = 10;

    // Iterate through each wand icon and apply rotation with origin at the center
    wandIcons.forEach(function (icon, index) {
        var rotationOffset = (wandIcons.length - index - 1) * 10; // Adjust the rotation calculation
        icon.style.transform = 'rotate(' + rotationOffset + 'deg)';
        icon.style.transformOrigin = 'center center';
    });

    // Add a transition property to create a smooth animation
    wandsContainer.style.transition = 'transform 1s ease-in-out';
    
    // Add this part to reposition the navigation buttons
    var navigation = document.querySelector('.section2-navigation');
     navigation.style.transition = 'bottom 1s ease';
    navigation.style.position = 'relative';
    navigation.style.bottom = '-' + (wandIcons.length * 20) + 'px'; // Adjust as needed for spacing

}

function resetwandRotation() {  
    var wandIcons = document.querySelectorAll('.wands-icons i img');
    wandIcons.forEach(function (icon) {
        icon.style.transform = 'rotate(0deg)';
    });}


function pileStars() {
        // Select all the wand icons within the .wands-icons container
        var starIcons = document.querySelectorAll('.stars-icons i img'); // Update the selector
    
        // Remove the absolute positioning to allow for centering within section2
        var starsContainer = document.querySelector('.stars-icons');
        starsContainer.style.position = 'relative';
        starsContainer.style.margin = '20';
        starsContainer.style.transition = 'transform 1s';
    
        // Add a class to the wands container to enable flex layout
        starsContainer.classList.add('piled');
    
        // Calculate the rotation angle for each card
        var rotationAngle = 10;
    
        // Iterate through each wand icon and apply rotation with origin at the center
        starIcons.forEach(function (icon, index) {
            var rotationOffset = (starIcons.length - index - 1) * 10; // Adjust the rotation calculation
            icon.style.transform = 'rotate(' + rotationOffset + 'deg)';
            icon.style.transformOrigin = 'center center';
        });
    
        // Add a transition property to create a smooth animation
        starsContainer.style.transition = 'transform 1s ease-in-out';
        
        // Add this part to reposition the navigation buttons
        var navigation = document.querySelector('.section3-navigation');
        navigation.style.transition = 'bottom 1s ease';
        navigation.style.position = 'relative';
        navigation.style.bottom = '-' + (starIcons.length * 30) + 'px'; // Adjust as needed for spacing
    
    }
    
function resetstarRotation() {  
        var starIcons = document.querySelectorAll('.stars-icons i img');
        starIcons.forEach(function (icon) {
            icon.style.transform = 'rotate(0deg)';
        });}

        function pileStones() {
            // Select all the wand icons within the .wands-icons container
            var stoneIcons = document.querySelectorAll('.stones-icons i img'); // Update the selector
        
            // Remove the absolute positioning to allow for centering within section2
            var stonesContainer = document.querySelector('.stones-icons');
            stonesContainer.style.position = 'relative';
            stonesContainer.style.margin = '20';
            stonesContainer.style.transition = 'transform 1s';
        
            // Add a class to the wands container to enable flex layout
            stonesContainer.classList.add('piled');
        
            // Calculate the rotation angle for each card
            var rotationAngle = 10;
        
            // Iterate through each wand icon and apply rotation with origin at the center
            stoneIcons.forEach(function (icon, index) {
                var rotationOffset = (stoneIcons.length - index - 1) * 10; // Adjust the rotation calculation
                icon.style.transform = 'rotate(' + rotationOffset + 'deg)';
                icon.style.transformOrigin = 'center center';
            });
        
            // Add a transition property to create a smooth animation
            stonesContainer.style.transition = 'transform 1s ease-in-out';
            
            // Add this part to reposition the navigation buttons
            var navigation = document.querySelector('.section4-navigation');
             navigation.style.transition = 'bottom 1s ease';
            navigation.style.position = 'relative';
            navigation.style.bottom = '-' + (stoneIcons.length * 20) + 'px'; // Adjust as needed for spacing
        
        }
        
        function resetstoneRotation() {  
            var stoneIcons = document.querySelectorAll('.stones-icons i img');
            stoneIcons.forEach(function (icon) {
                icon.style.transform = 'rotate(0deg)';
            });}

function pileSwords() {
            // Select all the wand icons within the .wands-icons container
            var swordIcons = document.querySelectorAll('.swords-icons i img'); // Update the selector
        
            // Remove the absolute positioning to allow for centering within section2
            var swordsContainer = document.querySelector('.swords-icons');
            swordsContainer.style.position = 'relative';
            swordsContainer.style.margin = '20';
            swordsContainer.style.transition = 'transform 1s';
        
            // Add a class to the wands container to enable flex layout
            swordsContainer.classList.add('piled');
        
            // Calculate the rotation angle for each card
            var rotationAngle = 10;
        
            // Iterate through each wand icon and apply rotation with origin at the center
            swordIcons.forEach(function (icon, index) {
                var rotationOffset = (swordIcons.length - index - 1) * 10; // Adjust the rotation calculation
                icon.style.transform = 'rotate(' + rotationOffset + 'deg)';
                icon.style.transformOrigin = 'center center';
            });
        
            // Add a transition property to create a smooth animation
            swordsContainer.style.transition = 'transform 1s ease-in-out';
            
            // Add this part to reposition the navigation buttons
            var navigation = document.querySelector('.section5-navigation');
            navigation.style.transition = 'bottom 1s ease';
            navigation.style.position = 'relative';
            navigation.style.bottom = '-' + (swordIcons.length * 20) + 'px'; // Adjust as needed for spacing
        
        }
        
        function resetswordRotation() {  
            var swordIcons = document.querySelectorAll('.swords-icons i img');
            swordIcons.forEach(function (icon) {
                icon.style.transform = 'rotate(0deg)';
            });}

function pileForces() {
                // Select all the wand icons within the .wands-icons container
                var forceIcons = document.querySelectorAll('.forces-icons i img'); // Update the selector
            
                // Remove the absolute positioning to allow for centering within section2
                var forcesContainer = document.querySelector('.forces-icons');
                forcesContainer.style.position = 'relative';
                forcesContainer.style.margin = '20';
                forcesContainer.style.transition = 'transform 1s';
            
                // Add a class to the wands container to enable flex layout
                forcesContainer.classList.add('piled');
            
                // Calculate the rotation angle for each card
                var rotationAngle = 6;
            
                // Iterate through each wand icon and apply rotation with origin at the center
                forceIcons.forEach(function (icon, index) {
                    var rotationOffset = (forceIcons.length - index - 1) * 6; // Adjust the rotation calculation
                    icon.style.transform = 'rotate(' + rotationOffset + 'deg)';
                    icon.style.transformOrigin = 'center center';
                });
            
                // Add a transition property to create a smooth animation
                forcesContainer.style.transition = 'transform 1s ease-in-out';
                
                // Add this part to reposition the navigation buttons
                var navigation = document.querySelector('.section6-navigation');
                navigation.style.transition = 'bottom 1s ease';
                navigation.style.position = 'relative';
                navigation.style.bottom = '-' + (forceIcons.length * 15) + 'px'; // Adjust as needed for spacing
            
            }
            
function resetforceRotation() {  
                var forceIcons = document.querySelectorAll('.forces-icons i img');
                forceIcons.forEach(function (icon) {
                    icon.style.transform = 'rotate(0deg)';
                });}








function shuffleCards() {
    const container = document.querySelector('.tarotcardshuffle-container');
    const cards = Array.from(document.querySelectorAll('.tarotcardshuffle'));
                  
    // Calculate the maximum position offsets within the container
    const maxOffsetX = container.clientWidth - cards[0].clientWidth;
    const maxOffsetY = container.clientHeight - cards[0].clientHeight;
                  
    container.style.display = 'block'; // Show the container
    container.classList.add('shuffle-active'); // Add shuffle-active class
                  
    cards.forEach(card => {
    // Generate random position offsets within the container
    const offsetX = Math.floor(Math.random() * maxOffsetX + 100);
    const offsetY = Math.floor(Math.random() * maxOffsetY + 175);
                  
    // Generate random position along the Z-axis
    const translateZ = Math.floor(Math.random() * 200) - 100; // Range: -100 to 100
                  
    // Generate random rotation angle
    const rotation = Math.floor(Math.random() * 361); // Range: 0 to 360
                  
    // Apply the random positions, translation, and rotation to the card
    card.style.position = 'absolute';
    card.style.left = `${offsetX}px`;
    card.style.top = `${offsetY}px`;
    card.style.transform = `translateZ(${translateZ}px) rotate(${rotation}deg)`;
    card.style.transition = '1s';
                  
    // Add event listeners for hover and click
    card.addEventListener('mouseenter', handleCardHover);
    card.addEventListener('mouseleave', handleCardLeave);
    card.addEventListener('click', handleCardClick);
    });
                 
    }
                  
function gatherCards() {
    const container = document.querySelector('.tarotcardshuffle-container');
    const cards = Array.from(document.querySelectorAll('.tarotcardshuffle'));
                  
    container.style.display = 'block'; // Show the container
    container.classList.add('shuffle-active'); // Add shuffle-active class
                  
    const radius = 50; // Radius of the circular shape
    const centerX = container.clientWidth / 2; // X-coordinate of the center point
    const centerY = container.clientHeight / 1.25; // Y-coordinate of the center point
                  
    // Shuffle the cards randomly
    shuffleArray(cards);
                  
    const angleIncrement = (2 * Math.PI) / cards.length; // Angle increment between each card
                  
    cards.forEach((card, index) => {
    const angle = index * angleIncrement; // Calculate the angle in radians
                  
    // Calculate the card position based on the angle and radius
    const offsetX = centerX + radius * Math.cos(angle) - card.clientWidth / 2;
    const offsetY = centerY + radius * Math.sin(angle) - card.clientHeight / 2;
                  
    // Apply the position and rotation to the card
    card.style.position = 'absolute';
    card.style.left = `${offsetX}px`;
    card.style.top = `${offsetY}px`;
    card.style.transform = `rotate(${angle}rad)`;
    card.style.transition = '1s';
                  
    // Add event listeners for hover and click
    card.addEventListener('mouseenter', handleCardHover);
    card.addEventListener('mouseleave', handleCardLeave);
    card.addEventListener('click', handleCardClick);
    });
    }
                  
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
}
    function handleCardHover(event) {
    const card = event.target;
    card.style.transform += ' scale(1.4)';
    card.style.zIndex = '9999';
}
                
    function handleCardLeave(event) {
    const card = event.target;
    card.style.transform = 'scale(1)';
    card.style.zIndex = Math.floor(Math.random() * 100);
    }
                
                
    function handleCardClick(event) {
    const card = event.target;
    const href = card.querySelector('a').href;
    window.location.href = href;
    }
                  
    const shuffleButton = document.querySelector('.shuffleButton');
    shuffleButton.addEventListener('click', shuffleCards);
                
    const gatherButton = document.querySelector('.gatherButton');
    gatherButton.addEventListener('click', gatherCards);
    ;