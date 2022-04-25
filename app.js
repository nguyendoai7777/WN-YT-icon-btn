const permission = document.querySelector('#permission');
const btn = document.querySelector('.pushNotification');
const iconPath = 'https://qc-static.coccoc.com/a-images/e91/2ef/e912ef5b1b58d6b8ae1e23ee848a23e6f6f21050aca89816ac3139d636b567ff.jpg';
function assignPermission() {
  permission.textContent = Notification.permission;
}

btn.addEventListener('click', () => {
  console.log('click');
  const appPermission = Notification.permission;
  assignPermission();
  if(appPermission !== 'granted') {
    Notification.requestPermission().then(() => {
      assignPermission();
    })
  } else {
    const notifier = new Notification('notification', {
      body: 'You have a notification',
      icon: iconPath
    })
  }
})


  assignPermission();
