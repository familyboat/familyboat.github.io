/* 
  author: familyboat

  component cards
*/
import { EventCard } from './event.card.js';
import { DETAILPATH } from '../assets/javascript/event.constant.js';

const e = React.createElement;

export const EventCards = ({
  /* EventCards组件的基组件 */
  component = 'div',
  /* EventCards组件的额外的类 */
  classname = '',
  /* EventCards组件的cards属性 */
  cards = [],
  /* EventCards组件的pk属性 */
  pk = '',
  /* EventCards组件的额外的样式 */
  style = {},
  ...porps
}) => {
  const Component = component;
  const className = `event-cards ${classname}`;

  return e(
    Component,
    {
      className,
      style,
      ...porps
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
            isExpandable: false,
            ...card
          },
          null,
        )
      ),
    ))
  );
};