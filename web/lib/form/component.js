import { FormContext, useForm } from 'react-hook-form'

const Component = ({ values, onSubmit, skinSelf, ...props }) => {
  const form = useForm({ defaultValues: values, mode: 'onBlur' })

  return $(
    FormContext,
    form,
    $form({ onSubmit: form.handleSubmit(onSubmit), skin: skinSelf, ...props }),
  )
}

Component.displayName = lib.cc.p(ID)

export default Component
