import 'normalize.css';
import './css.css';
import _ from 'lodash';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['', 'も'], ' ');

  return element;
}

document.body.appendChild(component());

/* トップ画面*/
if (location.pathname == "selectpayment.html") {
  var itemList = document.querySelector('#itemList');
  var template = document.getElementById('ItemTemplate');

  for (i=0; i < 8; i++ ) {
    var clone = document.importNode(template.content, true);
    clone.querySelector('img').src = `/images/shopItem0${i}.png`;
    itemList.appendChild(clone);
  }
}

/* 決済選択画面 */
if (location.pathname == "selectpayment.html") {
}
