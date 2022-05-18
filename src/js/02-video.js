import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
//player.addEventListener('timeupdate', throttle(1000));
player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
    return seconds;
  }, 1000),
);

if (localStorage.getItem('videoplayer-current-time')) {
  currentTime = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(currentTime);
}
// if (!localStorage.getItem('videoplayer-current-time')) {
//   let currentTime = 0;
// } else {
//   currentTime = localStorage.getItem('videoplayer-current-time');
//   player.setCurrentTime(currentTime);
// }

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

//player.addEventListener('timeupdate');
//
