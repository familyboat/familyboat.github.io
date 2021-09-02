/* 
  author: familyboat

  card component
*/

import { IMAGEPATH } from "../assets/javascript/event.constant.js";
import { isArray } from "../assets/javascript/event.util.js";

const cardTemplate = `
  <article class="card {{type}}">
    <section>
      {{imgs}}
    </section>
    <section>
      <header>
        <h1>{{title}}</h1>
        <address>
          {{author}} published at <time>{{datetime}}</time>
        </address>
      </header>
      <section>
        {{paragraphs}}
      </section>
    </section>
  </article>`

function buildCard(card, type) {
  var type = type == 't2b' ? 't2b' : type == 'l2r' ? 'l2r' : 'default',
    card = isArray(card) ? card[0] : card,
    imgs = card.photos.map(photo => `<img src="${IMAGEPATH + photo}" alt="${card.alt}" />`)
      .join('\n'),
    title = card.title,
    author = card.author,
    datetime = `${card.date} ${card.time}`,
    paragraphs = type == 't2b' ? card.paragraphs.map(paragraph => `<p>${paragraph}</p>`)
      .join('\n') : `<p>${card.paragraphs.join('\n')}</p>`;

  if (type == 'default') {
    throw 'unexpected type for card; only "t2b", "l2r" permit.';
  }

  return cardTemplate.replace('{{type}}', type)
    .replace('{{imgs}}', imgs)
    .replace('{{title}}', title)
    .replace('{{author}}', author)
    .replace('{{datetime}}', datetime)
    .replace('{{paragraphs}}', paragraphs);
}

export default buildCard;