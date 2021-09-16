import { filter, group } from './event.util.js';
import { EventCards } from '../../component/event.cards.js';
import {RESOURCEPATH} from './event.constant.js';

const e = React.createElement;

async function worker (url, filterKey, filterValue, primaryKey, dom) {
  let response = await fetch(url);
  let data = await response.json();
  let cards = data['events'];
  let cardsObj = group(cards, primaryKey);
  let eventcards = [];

  for (let [pk, cards] of Object.entries(cardsObj)) {
    eventcards.push(e(
      EventCards,
      {
        cards,
        pk,
      },
      null,
    ))
  }
  
  ReactDOM.render(
    e(
      React.Fragment,
      null,
      ...eventcards
    ),
    document.querySelector(dom),
  )
}

let primaryKey = 'date'
let dom = '#app';
let url = RESOURCEPATH;

worker(url, null, null, primaryKey, dom);