import 'normalize.css';
import './css.css';
import _ from 'lodash';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['', ''], ' ');

  return element;
}

document.body.appendChild(component());

(() => {

  if (window.innerWidth > 410) {
    document.write('スマートフォンを推奨しています。 お金や時間の都合によりパソコンでは表示できません。');
  }

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
  var vrView = new VRView.Player('#vrview', {
    width: '100%',
    height: 300,
    image: 'https://storage.googleapis.com/test__rf6tgyuhijokpijuhytrdfyguhijo/tokyoStation.jpg',
    //preview: true,
    //is_debug: true,
    is_stereo: false,
    is_autopan_off: true
  });

  vrView.on('ready', onVRViewReady);
  vrView.on('modechange', onModeChange);
  vrView.on('getposition', onGetPosition);
  vrView.on('error', onVRViewError);

  vrView.on('click', function(event) {
    if (event.id == myHotspotId) {
      // Handle hotspot click.
    }
  });
}
