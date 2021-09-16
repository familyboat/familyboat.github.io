import { filter } from './event.util.js';
import { EventCard } from '../../component/event.card.js';
import {RESOURCEPATH} from './event.constant.js';

const e = React.createElement;

async function worker (url, filterKey, filterValue, dom) {
  var response = await fetch(url);
  var data = await response.json();
  var cards = data['events'];
  var card = filter(cards, filterKey, filterValue);
  
  ReactDOM.render(
    e(
      EventCard,
      {...card[0]},
      null,
    ),
    document.querySelector(dom),
  )
}

let filterKey = 'id';
let filterValue = location.search.replace('?', '');
let dom = '#app';
let url = RESOURCEPATH;

worker(url, filterKey, filterValue, dom);