var photos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg',
  '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg',
  '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg',
  '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg',
  '32.jpg', '33.jpg', '34.jpg', '35.jpg', '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg', '41.jpg', '42.jpg'];
var current_index = 0;
var show_index = current_index + 1;

var touchStartX = 0;
var touchEndX = 0;

function update_photo() {
  const url = 'https://cdn1.pretoriusse.net/CDN/Images/minette-art/';
  if (current_index < photos.length) {
    let source = url + photos[current_index];
    document.getElementById('art-img').src = source;
    document.getElementById('art-link').href = source;
    current_index = (current_index + 1) % photos.length;
    show_index = current_index + 1;
    document.getElementById('index-shower').innerHTML = show_index + " / " + photos.length;
  }
};

function previous_photo() {
  const url = 'https://cdn1.pretoriusse.net/CDN/Images/minette-art/'

  current_index = (current_index - 1 + photos.length) % photos.length;
  show_index = current_index + 1;

  let source = url + photos[current_index];
  document.getElementById('art-img').src = source;
  document.getElementById('art-link').href = source;
  document.getElementById('index-shower').innerHTML = show_index + " / " + photos.length;
}

function next_photo() {
  const url = 'https://cdn1.pretoriusse.net/CDN/Images/minette-art/'

  current_index = (current_index + 1) % photos.length;
  show_index = current_index + 1;

  let source = url + photos[current_index];
  document.getElementById('art-img').src = source;
  document.getElementById('art-link').href = source;
  document.getElementById('index-shower').innerHTML = show_index + " / " + photos.length;
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipe();
}

function handleSwipe() {
  const swipeThreshold = 50; // Adjust as needed
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > swipeThreshold) {
    // Swipe right
    previous_photo();
  } else if (swipeDistance < -swipeThreshold) {
    // Swipe left
    next_photo();
  }
}

previous_btn = document.getElementById("previous");
previous_btn.addEventListener("click", previous_photo);
previous_btn.addEventListener("touchstart", handleTouchStart);
previous_btn.addEventListener("touchend", handleTouchEnd);

next_btn = document.getElementById("next");
next_btn.addEventListener("click", next_photo);
next_btn.addEventListener("touchstart", handleTouchStart);
next_btn.addEventListener("touchend", handleTouchEnd);

setInterval(update_photo, 10000);
