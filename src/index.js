import 'normalize.css';
import './css.css';
import _ from 'lodash';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['', 'も'], ' ');

  return element;
}

document.body.appendChild(component());

