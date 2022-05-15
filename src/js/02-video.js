import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
//player.addEventListener('timeupdate', throttle(1000));
player.on('timeupdate', function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  return seconds;
});
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

//player.addEventListener('timeupdate');
//
