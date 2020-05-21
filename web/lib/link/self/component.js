import { Link } from 'react-router-dom'

const parseRelationship = (relationship, mustRefer, mustFollow) => {
  const config = []

  if (relationship) config.push(relationship)
  if (!mustRefer) config.push('noreferrer')
  if (!mustFollow) config.push('nofollow')

  if (config.length > 0) return config.join(' ')
}

const Component = ({
  label,
  mustCreateTab,
  relationship,
  mustFollow = true,
  mustRefer = true,
  skinSelf,
  to = '#',
  ...props
}) => {
  if (label) props['aria-label'] = label

  if (mustCreateTab) props.target = '_blank'

  const rel = parseRelationship(relationship, mustRefer, mustFollow)
  if (rel) props.rel = rel

  return lib.link.test(to)
    ? $link({ href: to, skin: skinSelf, ...props })
    : $(Link, { skin: skinSelf, to, ...props })
}

Component.displayName = lib.cc.p(ID)

export default Component
