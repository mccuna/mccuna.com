/*@jsxRuntime automatic @jsxImportSource react*/
export const meta = {
  title: 'Article 1',
  description: 'Article 1 description',
};
function _createMdxContent(props) {
  const _components = Object.assign(
    {
      h1: 'h1',
      pre: 'pre',
      code: 'code',
      span: 'span',
    },
    props.components,
  );
  return (
    <>
      <_components.h1>{'Hello content!'}</_components.h1>
      {'\n'}
      <_components.pre>
        <_components.code className='hljs language-tsx'>
          <_components.span className='hljs-keyword'>
            {'export'}
          </_components.span>{' '}
          <_components.span className='hljs-keyword'>
            {'const'}
          </_components.span>{' '}
          <_components.span className='hljs-title function_'>
            {'loader'}
          </_components.span>
          {' = ('}
          <_components.span className='hljs-params' />
          {') => {\r\n  '}
          <_components.span className='hljs-keyword'>
            {'return'}
          </_components.span>{' '}
          <_components.span className='hljs-title function_'>
            {'permanentRedirect'}
          </_components.span>
          {'(routeHrefs.'}
          <_components.span className='hljs-property'>
            {'aboutMe'}
          </_components.span>
          {'.'}
          <_components.span className='hljs-property'>
            {'myJourney'}
          </_components.span>
          {');\r\n};\r\n\r\n'}
          <_components.span className='hljs-keyword'>
            {'const'}
          </_components.span>{' '}
          <_components.span className='hljs-title function_'>
            {'AboutMe'}
          </_components.span>
          {' = ('}
          <_components.span className='hljs-params' />
          {') => {\r\n  '}
          <_components.span className='hljs-comment'>
            {
              '// This will never get rendered as the route is just a proxy for the permanent redirect'
            }
          </_components.span>
          {'\r\n  '}
          <_components.span className='hljs-comment'>
            {'// eslint-disable-next-line react/jsx-no-useless-fragment'}
          </_components.span>
          {'\r\n  '}
          <_components.span className='hljs-keyword'>
            {'return'}
          </_components.span>{' '}
          <_components.span className='xml'>
            <_components.span className='hljs-tag'>{'<>'}</_components.span>
            <_components.span className='hljs-tag'>{'</>'}</_components.span>
          </_components.span>
          {';\r\n};\r\n\r\n'}
          <_components.span className='hljs-keyword'>
            {'export'}
          </_components.span>{' '}
          <_components.span className='hljs-keyword'>
            {'default'}
          </_components.span>{' '}
          <_components.span className='hljs-title class_'>
            {'AboutMe'}
          </_components.span>
          {';\n'}
        </_components.code>
      </_components.pre>
    </>
  );
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? (
    <MDXLayout {...props}>
      <_createMdxContent {...props} />
    </MDXLayout>
  ) : (
    _createMdxContent(props)
  );
}
export default MDXContent;
