//Google Sheet connect code
  var scriptURL = "https://script.google.com/macros/s/AKfycbwBSQI6JjBKaDBd0I1cZ7lNbOuPXCW2LgXnvFehyLQ23L-IXbUBH_V5huL9SdMIy0eXQg/exec";
  var form = document.forms['google-sheet'];
  form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
  });

//AOS Initialize 
AOS.init();