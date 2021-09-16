import { IMAGEPATH } from "../assets/javascript/event.constant.js";

const e = React.createElement;

export const Carousel = ({
  images,
  alt,
  isExpand,
}) => {
  const component = 'div';
  const className = isExpand ? 'carousel' : 'carousel unexpand';
  const imgs = images.map(image => e(
    'img',
    {
      alt,
      src: `${IMAGEPATH + image}`,
    },
    null,
  ));

  return e(
    component,
    {className},
    ...imgs
  );
};