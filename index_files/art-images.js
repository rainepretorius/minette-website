var photos = ['minette.jpg', 'minette1.jpeg', 'minette2.jpeg', 'minette3.jpeg', 'minette4.jpeg', 'minette5.jpeg'];
var current_index = 0;

function update_photo() {
  console.log(current_index);
  const url = 'https://cdn1.pretoriusse.net/CDN/Images/minette-art/';
  console.log(current_index < photos.length);
  if (current_index < photos.length) {
    let source = url + photos[current_index];
    document.getElementById('art-img').src = source;
    document.getElementById('art-link').href = source;
    current_index = current_index + 1;
  } else {
    current_index = 0;
  };
};

setInterval(update_photo, 10000);
