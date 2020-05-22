import { useFormContext } from 'react-hook-form'

const Component = ({ children, onSubmit, skinSelf, skinLoader, ...props }) => {
  const form = useFormContext()

  return $(
    LibButton,
    {
      action: form.handleSubmit(onSubmit),
      isDisabled: form.formState.isSubmitting,
      skinSelf,
      ...props,
    },
    form.formState.isSubmitting
      ? $(LibLoaderIcon, { skinSelf: skinLoader })
      : children,
  )
}

Component.displayName = lib.cc.p(ID)

export default Component
