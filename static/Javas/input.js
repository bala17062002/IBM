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
// document.addEventListener("DOMContentLoaded", function() {
//   const form = document.querySelector("form");
//   const customAlert = document.getElementById("custom-alert");
//   const okButton = document.querySelector(".modal-close");

//   form.addEventListener("submit", function(event) {
//     event.preventDefault(); 

//     const requiredFields = [
//       "gender",
//       "dropdown1",
//       "schoolPercentage",
//       "dropdown2",
//       "dropdown4",
//       "CGPA",
//       "dropdown5",
//       "intermediatePercentage",
//       "Ist"
//     ];

//     let isEmpty = false

//     try{

//       requiredFields.forEach(fieldId=>{
//         const field = document.getElementById(fieldId);
//         console.log('fieldId - '+fieldId+ "   "+field)
//         // if(!field.value || !field.value.trim()){
//         //   isEmpty = true;
//         // }
        
//       })
//     }catch(err){
//       isEmpty = true
//     }
//     console.log(isEmpty)

//     // const isEmpty = requiredFields.some(fieldId => {
//     //   const field = document.getElementById(fieldId);
//     // });

//     // if (isEmpty) {
//     //   customAlert.style.display = "block";
//     // } else {
//     //   form.submit();
//     // }
//   });

//   okButton.addEventListener("click", function() {
//     customAlert.style.display = "none";
//   });
// });