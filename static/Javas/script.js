console.log("Scrript is working")
var typed = new Typed('.auto-type', {
  strings: ["Placement Analysis", "Placement Prediction"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})


const footerHeart = document.getElementById('footer-heart');

footerHeart.addEventListener( 'click' , () => {
  footerHeart.classList.toggle('clicked');
});
footerHeart.addEventListener('click', ()=> {
  footerHeart.classList.toggle('clickedout');
})

const aboutSection = document.querySelector('.aboutmain');

const options = {
  threshold: 0.5, 
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(aboutSection);



  let direction = 'left'; // Start with left
  function revealCard(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${direction}-reveal`);
      }
    });
  }

  const cardObserver = new IntersectionObserver(revealCard, {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.5, 
  });

  const cards = document.querySelectorAll('.text-card');


  cards.forEach(card => {
    cardObserver.observe(card);
  });




const conSection = document.querySelector('.c');

const options2 = {
  threshold: 0.3, 
};

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options2);

observer2.observe(conSection);



