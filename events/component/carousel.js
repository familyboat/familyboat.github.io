import { IMAGEPATH } from "../assets/javascript/event.constant.js";

const e = React.createElement;

export const Carousel = ({
  /* Carousel组件的基组件，默认为div */
  component = 'div',
  /* Carousel组件的额外的类 */
  classname = '',
  /* Carousel组件的img元素 */
  images = [],
  /* Carousel组件的img元素的alt属性 */
  alt = '',
  /* Carousel组件是否展开 */
  isExpandable = true,
}) => {
  const Component = component;
  const className = isExpandable ? 
    `carousel ${classname}` : 
    `carousel unexpandable ${classname}`;
  const imgs = images.map(image => e(
    'img',
    {
      alt,
      src: `${IMAGEPATH + image}`,
    },
    null,
  ));

  return e(
    Component,
    {className},
    ...imgs
  );
};
