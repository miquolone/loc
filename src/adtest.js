
//import 'three';
import _ from 'lodash';
import 'normalize.css';
import './css.css';
import '../photo-sphere-viewer.css';

const PhotoSphereViewer = require('../photo-sphere-viewer');
window.gotoItem = function(target) {
  "http://www.thr.mlit.go.jp/noshiro/kasen/moriyoshi/";
}
window.addEventListener('DOMContentLoaded', onVrViewLoad);
function onVrViewLoad() {
  var PSV = new PhotoSphereViewer({
    panorama: "/images/R0010215aa.jpg",
    container: 'advrview',
    pano_data: {
      full_width: 4000,
      full_height: 2000,
      cropped_width: 4000,
      cropped_height: 2000,
      cropped_x: 500,
      cropped_y: 250
    },
    caption: '',
    time_anim: false,
    loading_img: "/images/anbeiina_logo.png",
    navbar: ['markers'],
    default_fov: 70,
    default_lat: 2.3,
    mousewheel: false,
    touchmove_two_fingers: false,
    markers: [
      {
        id: 'imageAkita',
        longitude: 3.4,
        latitude: 0.13770,
        image: '/images/anbeiina_logo.png',
        width: 60,
        height: 40,
        anchor: 'bottom center',
        tooltip: {
          content: '<a onClick="gotoItem(this)" style="padding:1em;display:block;font-size:8px;">森吉山ダム</a>',
          position: 'right',
        },
        content: console.log('asdfa'),
      },
    ],
    size: {
      height: 200
    }
  });

  PSV.hideNavbar();
  //PSV.parseAngle( '0.14']);
  //PSV.parsePosition("10% 50%");
  PSV.ready = function() {
    console.log('ready');
  }
}
