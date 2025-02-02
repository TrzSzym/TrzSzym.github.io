const button = document.getElementById('przycisk');

button.addEventListener('mouseover', function(event) {
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
});

function napis(){
    Napis=document.getElementById("boxy");
    Napis.innerHTML="Awww, Wiedziałem słodziaku Hihi<br><img src='200w.gif'>";
}