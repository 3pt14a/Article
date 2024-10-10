 // Get modal elements
 const modals = document.querySelectorAll('.modal');
 const openModalButtons = document.querySelectorAll('.open-modal');
 const closeModalButtons = document.querySelectorAll('.close');

 // Function to open the modal
 openModalButtons.forEach(button => {
     button.onclick = function() {
         const modalId = this.getAttribute('data-modal');
         const modal = document.getElementById(modalId);
         modal.style.display = "block";
         document.body.classList.add('modal-open'); // Add blur effect
     };
 });

 // Function to close the modal
 closeModalButtons.forEach(button => {
     button.onclick = function() {
         const modal = button.closest('.modal');
         modal.style.display = "none";
         document.body.classList.remove('modal-open'); // Remove blur effect
     };
 });

 // Close modal when clicking outside of it
 window.onclick = function(event) {
     modals.forEach(modal => {
         if (event.target === modal) {
             modal.style.display = "none";
             document.body.classList.remove('modal-open'); // Remove blur effect
         }
     });
 }; 


 function openArticle(articleUrl) {
    window.location.href = articleUrl;
}