import { filter } from './event.util.js';
import buildCard from '../../component/event.card.js';
import { mount } from './event.util.js';
import {RESOURCEPATH} from './event.constant.js';

async function worker (url, filterKey, filterValue, dom) {
  var response = await fetch(url);
  var data = await response.json();
  var cards = data['events'];
  var card = filter(cards, filterKey, filterValue);
  mount(dom, buildCard(card, 't2b'));
}

let filterKey = 'id';
let filterValue = location.search.replace('?', '');
let dom = '#app';
let url = RESOURCEPATH;

worker(url, filterKey, filterValue, dom);