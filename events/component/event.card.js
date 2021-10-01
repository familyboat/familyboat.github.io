/* 
  author: familyboat

  card component
*/
import { Article } from "./article.js";
import { Carousel } from "./carousel.js";

const e = React.createElement;

export const EventCard = ({
  /* EventCard组件的基组件 */
  component = 'div',
  /* EventCard组件的额外的类 */
  classname = '',
  /* EventCard组件是否展开 */
  isExpandable = true,
  /* EventCard组件的额外的样式 */
  style = {},
  ...props
}) => {
  const Component = component;
  const className = isExpandable ? 
    `event-card ${classname}` : 
    `event-card unexpandable ${classname}`;
  const { photos, alt, ...rest } = props;

  const carousel = e(
    Carousel,
    {
      images: photos,
      alt,
      isExpandable,
    },
    null,
  );
  const article = e(
    Article,
    {
      isExpandable,
      ...rest
    },
    null,
  );

  return e(
    Component,
    {
      className,
      style,
    },
    carousel,
    article,
  );
};