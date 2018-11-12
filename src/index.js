
//import 'three';
import _ from 'lodash';
import 'normalize.css';
import './css.css';
import '../photo-sphere-viewer.css';

const PhotoSphereViewer = require('../photo-sphere-viewer');
//const THREE = require('three');
function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['', ''], ' ');

  return element;
}


window.gotoItem = function(target) {
  console.log(target);
}
document.body.appendChild(component());

document.addEventListener('DOMContentLoaded', () => {
// adテスト用に一旦外すだけ
//  if (window.innerWidth > 410) {
//    document.write('スマートフォンを推奨しています。 お金や時間の都合によりスマホ以外では表示できません。');
//  }
});

(() => {

  console.log('123');

  /* トップ画面*/
  if (location.pathname == "/" || location.pathname == "/adtest" ) {

    window.addEventListener('DOMContentLoaded', onVrViewLoad);

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
    pano_data: {
      full_width: 4000,
      full_height: 2000,
      cropped_width: 3000,
      cropped_height: 1500,
      cropped_x: 500,
      cropped_y: 250
    },

    caption: '',
    time_anim: false,
    loading_img: "/images/tumblr_nurhzkuKQO1syz1nro1_540.gif",
    navbar: ['markers'],
    default_fov: 70,
    default_lat: 0.3,
    mousewheel: false,
    touchmove_two_fingers: false,
    markers: [
      {
        id: 'imageKakaku',
        longitude: 0.2,
        latitude: -0.23770,
        image: '/images/kakaku.svg',
        width: 60,
        height: 40,
        anchor: 'bottom center',
        tooltip: {
          content: '<a onClick="gotoItem(this)" style="padding:1em;display:block;font-size:8px;">3,000円<br>資生堂マキアージュ </a>',
          position: 'right',
        },
        content: console.log('asdfa')
      },
      {
        id: 'textKakaku',
        longitude: 0.2,
        latitude: 0.25770,
        html: '<a class="display:block;font-size:8px;border: 3px solid #888;">天井のライト<br>照明器具</a> &hearts;',
        anchor: 'bottom right',
        scale: [0.5, 1.5],
        style: {
          maxWidth: '150px',
          color: 'white',
          fontSize: '20px',
          fontFamily: 'Helvetica, sans-serif',
          textAlign: 'center'
        },
        tooltip: {
          content: '<a onClick="gotoItem(this)" style="padding-right:2em;display:block;font-size:1.1em;">2,800円<br>天井のライト<br>ダウンスポット</a>',
          position: 'right',
        }
      },
    ],
    size: {
      height: 350
    }
  });

  PSV.hideNavbar();
  //PSV.parseAngle( '0.14']);
  //PSV.parsePosition("10% 50%");
  PSV.showTooltip({ content: 'Hello world', top: 200, left: 450, position: 'center bottom'})
  PSV.click(function(){ console.log('クリック'); })
}
