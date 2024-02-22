document.addEventListener('DOMContentLoaded', function() {
    var countdownTimer = document.getElementById('timer');
    var countdown = 60; // Countdown from 60 seconds

    var interval = setInterval(function() {
        countdown--;
        countdownTimer.innerText = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            document.querySelector('.container').innerHTML = '<p>This message has self-destructed.</p>';
            // Optional: Redirect or change the content further
        }
    }, 1000);
});
