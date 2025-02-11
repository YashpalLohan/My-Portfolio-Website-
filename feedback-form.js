const scriptURL = 'https://script.google.com/macros/s/AKfycbwfbtoZRnjkTlnSwjD76e4rR87wxifDlRDp8eWigb82CaQOYrc5wxpSnC--bQ776xihgw/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
        alert("Please fill out all required fields.");
        return;
    }
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message));
});