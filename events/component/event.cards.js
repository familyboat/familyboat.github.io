/* 
  author: familyboat

  component cards
*/
import { EventCard } from './event.card.js';
import { DETAILPATH } from '../assets/javascript/event.constant.js';

const e = React.createElement;

export const EventCards = ({
  cards,
  pk,
  style = {},
  ...porps
}) => {
  const component = 'dl';
  const className = 'event-cards';

  return e(
    component,
    {
      className,
      style,
    },
    e(
      'dd',
      {className: 'primary-key'},
      pk,
    ),
    ...cards.map(card => e(
      'dt',
      null,
      e(
        'a',
        {
          href: `${DETAILPATH + '?' + card.id}`,
        },
        e(
          EventCard,
          {
            isExpand: false,
            ...card
          },
          null,
        )
      ),
    ))
  );
};