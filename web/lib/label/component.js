const Component = ({
  children,
  isRequired,
  to,
  skinSelf,
  skinIsRequired,
  ...props
}) => {
  if (!children) return null

  return $label(
    {
      htmlFor: to,
      skin: lib.skins({ kind: 'box' }, skinSelf),
      ...props,
    },
    children,
    isRequired &&
      $text(
        {
          skin: lib.skins(({ theme }) => {
            return { text: LIB.colors.important[theme] }
          }, skinIsRequired),
        },
        '*',
      ),
  )
}

Component.displayName = lib.cc.p(ID)

export default Component
