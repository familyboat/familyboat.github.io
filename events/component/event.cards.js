/* 
  author: familyboat

  component cards
*/
import buildCard from './event.card.js';
import { DETAILPATH } from '../assets/javascript/event.constant.js';

const cardsTemplate = `
  <dl class="cards">
    <dd class="primary-key">{{primaryKey}}</dd>
    {{cards}}
  </dl>
`

function buildCards(pk, cards) {
  var primaryKey = pk,
    cardsContent = cards.map(card => `<dt><a href="${DETAILPATH + '?' + card.id}">${buildCard(card, 'l2r')}</a></dt>`)
      .join('\n');

  return cardsTemplate.replace('{{primaryKey}}', primaryKey)
    .replace('{{cards}}', cardsContent);
}

export default buildCards;