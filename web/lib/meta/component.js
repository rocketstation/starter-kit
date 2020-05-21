import { Helmet } from 'react-helmet-async'

const Component = ({ title, descr, ...props }) => {
  return $(
    Helmet,
    $('title', title ?? LIB.title),
    $('meta', { content: descr, name: 'description' }),
    ...props,
  )
}

Component.displayName = lib.cc.p(ID)

export default Component
