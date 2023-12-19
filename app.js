async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/sw.js');
    } catch (e) {
      console.error(e);
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden');
  }
}

window.addEventListener('load', e => {
  registerSW();
});

//const pushButton = document.getElementById('push-btn');

if (!("Notification" in window)) {
  pushButton.hidden;
}

//pushButton.addEventListener('click', askPermission);

function askPermission(evt) {
  pushButton.disabled = true;
  Notification.requestPermission().then(function(permission) {
    notificationButtonUpdate();
  });
}

function notificationButtonUpdate() {
  if (Notification.permission == 'granted') {
    pushButton.disabled = true;
  } else {
    pushButton.disabled = false;
  }
}
