let yesClicks = 0;

function growYesButton() {
  yesClicks++;
  const yesButton = document.getElementById('yes-button');
  yesButton.style.transform = `scale(${1 + yesClicks * 0.1})`;

  const noButton = document.getElementById('no-button');
  noButton.style.marginRight = `${20 + yesClicks * 10}px`; // Increase margin between buttons
}

function celebrateBirthday(isBirthday) {
  if (isBirthday) {
    // Show overlay
    document.getElementById('overlay').style.display = 'block';

    // Hide question and buttons
    document.getElementById('question').style.display = 'none';
    document.getElementById('button-container').style.display = 'none';

    // Show birthday message
    document.getElementById('message').innerText = 'Happy Birthday!';
    document.getElementById('message').style.display = 'block';

    // Start cow animation after 2 seconds
    setTimeout(function() {
      document.getElementById('cow-image').style.left = 'calc(50% - 100px)';
      document.getElementById('birthday-message').innerText = 'Happy Birthday Sne!';
      document.getElementById('birthday-message').style.display = 'block';
    }, 2000);
  }
}
