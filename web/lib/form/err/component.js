import { useFormContext } from 'react-hook-form'

const Component = ({ ...props }) => {
  const form = useFormContext()

  const err = Object.values(form.errors[props.name] ?? {})[0]

  if (!err) return null

  return $box({ skin: { textSize: LIB.sizes.s } }, err.message)
}

Component.displayName = lib.cc.p(ID)

export default Component
