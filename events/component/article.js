const e = React.createElement;

export const Article = ({
  ...props
}) => {
  const component = 'div';
  const className = props.isExpand ? 'article' : 'article unexpand';
  const p = props.isExpand ?
    props.paragraphs.map(p => e(
      'p',
      null,
      p,
    )) : [e(
      'p',
      null,
      props.paragraphs.join('\n'),
    )]

  return e(
    component,
    {className},
    e(
      'h1',
      null,
      props.title,
    ),
    e(
      'address',
      null,
      `${props.author} 发布于 ${props.date + ' ' + props.time}`,
    ),
    ...p
  );
};