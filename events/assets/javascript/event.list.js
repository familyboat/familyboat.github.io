import { filter, group } from './event.util.js';
import buildCards from '../../component/event.cards.js';
import { mount } from './event.util.js';
import {RESOURCEPATH} from './event.constant.js';

async function worker (url, filterKey, filterValue, primaryKey, dom) {
  var response = await fetch(url);
  var data = await response.json();
  var cards = data['events'];
  var cardsObj = group(cards, primaryKey);

  var result = '';
  for (let pk in cardsObj) {
    result += buildCards(pk, cardsObj[pk]);
  }
  mount(dom, result);
}

let primaryKey = 'date'
let dom = '#app';
let url = RESOURCEPATH;

worker(url, null, null, primaryKey, dom);