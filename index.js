function disableScroll() {
  document.body.style.overflow = 'hidden'};

window.addEventListener('load', disableScroll);

let isShuffled = false;

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
      const offsetX = Math.floor(Math.random() * maxOffsetX);
      const offsetY = Math.floor(Math.random() * maxOffsetY);
  
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
    
    isShuffled = true;
  }
  
  function gatherCards() {
    const container = document.querySelector('.tarotcardshuffle-container');
    const cards = Array.from(document.querySelectorAll('.tarotcardshuffle'));
  
    container.style.display = 'block'; // Show the container
    container.classList.add('shuffle-active'); // Add shuffle-active class
  
    const radius = 225; // Radius of the circular shape
    const centerX = container.clientWidth / 2; // X-coordinate of the center point
    const centerY = container.clientHeight / 2; // Y-coordinate of the center point
  
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

  
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.twinkling-stars');
    const starCount = 15; // Number of stars in the trail
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      container.appendChild(star);
    }
  
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.twinkling-stars');
        const starCount = 30; // Number of stars in the trail
      
        for (let i = 0; i < starCount; i++) {
          const star = document.createElement('div');
          star.classList.add('star');
          container.appendChild(star);
        }
      
        const containerRect = container.getBoundingClientRect();
      
        document.addEventListener('mousemove', (event) => {
          const mouseX = event.clientX - containerRect.left;
          const mouseY = event.clientY - containerRect.top;
      
          const stars = container.querySelectorAll('.star');
      
          stars.forEach((star, index) => {
            const xPos = mouseX + (index * 10) - 100;
            const yPos = mouseY + (index * 10) - 100;
      
            star.style.transform = `translate(${xPos}px, ${yPos}px)`;
          });
        });
      })});