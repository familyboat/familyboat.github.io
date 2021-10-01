const e = React.createElement;

export const Article = ({
  /* 设置要渲染的基组件，默认为div */
  component = 'div',
  /* 添加到Article组件的额外类 */
  classname = '',
  /* Article组件的段落是否展开 */
  isExpandable = true,
  /* Article组件的paragraphs元素 */
  paragraphs = [],
  /* Article组件的title元素 */
  title = '',
  /* Article组件的author元素 */
  author = '',
  /* Article组件的date元素 */
  date = '',
  /* Article组件的time元素 */
  time = '',
}) => {
  const Component = component;
  const className = isExpandable ? 
    `article ${classname}` : 
    `article unexpandable ${classname}`;
  const p = isExpandable ?
    paragraphs.map(p => e(
      'p',
      null,
      p,
    )) : [e(
      'p',
      null,
      paragraphs.join('\n'),
    )]

  return e(
    Component,
    {className},
    e(
      'h1',
      null,
      title,
    ),
    e(
      'address',
      null,
      `${author} 发布于 ${date + ' ' + time}`,
    ),
    ...p
  );
};
