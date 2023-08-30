// function validateForm() {
//     var gender = document.getElementById("gender").value;
//     var school = document.getElementById("drop").value;
//     // Repeat for other input fields
        
//     if (gender === "" || school === "" /* Add conditions for other fields */) {
//         var alertMessage = document.getElementById("alert-message");
//         alertMessage.innerHTML = "Please check the details.";
//         alertMessage.style.display = "block";
//         return false;
//     }
//     return true;
//   }

const footerHeart = document.getElementById('footer-heart');
footerHeart.addEventListener( 'click' , () => {
  footerHeart.classList.toggle('clicked');
});
footerHeart.addEventListener('click', ()=> {
  footerHeart.classList.toggle('clickedout');
})