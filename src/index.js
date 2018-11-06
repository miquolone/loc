import 'jquery';
import 'bootstrap';
import 'normalize.css';
import './css.css';
import _ from 'lodash';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['', ''], ' ');

  return element;
}

document.body.appendChild(component());

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 410) {
    document.write('スマートフォンを推奨しています。 お金や時間の都合によりパソコンでは表示できません。');
  }
});

(() => {

  console.log('123');

  /* トップ画面*/
  if (location.pathname == "/") {

    window.addEventListener('load', onVrViewLoad);

    const itemList = document.querySelector('#itemList');
    const template = document.getElementById('ItemTemplate');

    for (var i=0; i < 8; i++ ) {
      var clone = document.importNode(template.content, true);
      clone.querySelector('img').src = `/images/shopItem0${i}.png`;
      itemList.appendChild(clone);
    }
  }

  /* 決済選択画面 */
  if (location.pathname == "selectpayment.html") {
  }
})()

function onVrViewLoad() {
  //var vrView = new VRView.Player('#vrview', {
  //  width: '100%',
  //  height: 300,
  //  image: 'https://storage.googleapis.com/test__rf6tgyuhijokpijuhytrdfyguhijo/tokyoStation.jpg',
  //  //preview: true,
  //  //is_debug: true,
  //  is_stereo: false,
  //  is_autopan_off: true
  //});

  //vrView.on('ready', onVRViewReady);
  //vrView.on('modechange', onModeChange);
  //vrView.on('getposition', onGetPosition);
  //vrView.on('error', onVRViewError);

  //vrView.on('click', function(event) {
  //  if (event.id == myHotspotId) {
  //    // Handle hotspot click.
  //  }
  //});
  var rootURL = 'https://photo-sphere-viewer.js.org';

  var PSV = new PhotoSphereViewer({
    //panorama: "https://photo-sphere-viewer.js.org/assets/Bryce-Canyon-National-Park-Mark-Doliner.jpg",
    panorama: "./images/tokyoStation.jpg",
    container: 'vrview',
    caption: '',
    time_anim: false,
    loading_img: "https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif",
    navbar: ['zoom','markers'],
    default_fov: 70,
    default_lat: 0.3,
    mousewheel: false,
    touchmove_two_fingers: false,
    markers: [
      {
        // image marker that opens the panel when clicked
        id: 'image',
        longitude: 0.2,
        latitude: -0.13770,
        image: rootURL + '/assets/pin-blue.png',
        width: 38,
        height: 38,
        anchor: 'bottom center',
        tooltip: '■1. 削除',
        content: document.getElementById('systemCaption').innerHTML
      },
      {
        id: 'text',
        longitude: 0,
        latitude: 0,
        html: '<b class="font-size:1.3em;border: 3px solid #888;">3,000円</b> &hearts;',
        anchor: 'bottom right',
        scale: [0.5, 1.5],
        style: {
          maxWidth: '100px',
          color: 'white',
          fontSize: '20px',
          fontFamily: 'Helvetica, sans-serif',
          textAlign: 'center'
        },
        tooltip: {
          content: '<div style="height:100px; width:90px;"><b style="font-size:1.1em;">3,000円</b> &hearts;<br>２行目<br>3行目',
          position: 'right',
          style: {
            height: "280px",
            width: "150px",
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            cursor         : '------'
          }
        }
      },
    ],
    size: {
      height: 350
    }
  });
}
