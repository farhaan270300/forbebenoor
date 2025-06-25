const slides = document.querySelectorAll('.slide');
const buttons = document.getElementById('buttons');
const restart = document.getElementById('restart');
const another = document.getElementById('another');
const end = document.getElementById('end');
let index = 0;

function showNext() {
  if (index > 0) slides[index - 1].style.display = 'none';
  if (index < slides.length) {
    slides[index].style.display = 'block';
    index++;
    setTimeout(showNext, 2500);
  } else {
    buttons.style.display = 'block';
  }
}
showNext();

restart.onclick = () => location.reload();
another.onclick = () => alert('New request will be sent to Farhaan.');
end.onclick = () => document.body.innerHTML = '<h1>Thank you for watching 💖</h1>';