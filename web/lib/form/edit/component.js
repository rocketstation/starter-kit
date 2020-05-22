import { useFormContext } from 'react-hook-form'

const Component = ({
  label,
  isWritable = true,
  isDisabled,
  rowsAmount = 5,
  skinSelf,
  ...props
}) => {
  const form = useFormContext()

  if (label) props['aria-label'] = label

  if (!isWritable) props.readOnly = true
  if (isDisabled) props.disabled = true

  return $editor({
    ref: form.register,
    rows: rowsAmount,
    skin: lib.skins(({ theme }) => {
      return libFormSkins.field.edit({ isDisabled, theme })
    }, skinSelf),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
