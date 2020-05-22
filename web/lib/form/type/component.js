import { useFormContext } from 'react-hook-form'

const Component = ({
  label,
  isWritable = true,
  isDisabled,
  skinSelf,
  ...props
}) => {
  const form = useFormContext()

  if (label) props['aria-label'] = label

  if (!isWritable) props.readOnly = true
  if (isDisabled) props.disabled = true

  return $input({
    ref: form.register,
    skin: lib.skins(({ theme }) => {
      return libFormSkins.field.type({ isDisabled, theme })
    }, skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
