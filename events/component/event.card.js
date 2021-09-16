/* 
  author: familyboat

  card component
*/
import { Article } from "./article.js";
import { Carousel } from "./carousel.js";

const e = React.createElement;

export const EventCard = ({
  photos,
  alt,
  title,
  author,
  paragraphs,
  date,
  time,
  isExpand = true,
  ...props
}) => {
  const component = 'div';
  const className = isExpand ? 'event-card' : 'event-card unexpand';
  const carousel = e(
    Carousel,
    {
      images: photos,
      alt,
      isExpand,
    },
    null,
  );
  const article = e(
    Article,
    {
      title,
      author,
      paragraphs,
      date,
      time,
      isExpand,
    },
    null,
  );

  return e(
    component,
    {
      className,
      ['style']: props.style,
    },
    carousel,
    article,
  );
};