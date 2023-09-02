const feedback_form = document.querySelector('.feedback_form');
const name = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const message = document.querySelector('.message');

feedback_form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default form submission behavior
    console.log('Submitting feedback:', { name: name.value, email: email.value, message: message.value });
    fetch('/feedback-user', {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                feedback_form.reset();
                name.value = '';
                email.value = '';
                message.value = '';
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.log(error);
            alert('Error submitting feedback. Please try again later.');
        });
});








