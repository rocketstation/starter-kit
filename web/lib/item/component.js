export const Self = ({ skinSelf, to, ...props }) => {
  return to
    ? $(LibLink, { skinSelf, to, ...props })
    : $box({ skin: skinSelf, ...props })
}

const Component = ({
  label,
  children,
  src,
  placeholder,
  to,
  skinSelf,
  skinContent,
  skinImg,
  ...props
}) => {
  return $(
    Self,
    {
      skinSelf: lib.skins(
        libSkins.contentRight({ space: LIB.spaces.s }),
        { boxWidthMin: 0, kind: 'track', trackAlign: 'center' },
        skinSelf,
      ),
      to,
      ...props,
    },
    $(LibImg, {
      label,
      placeholder,
      skinSelf: lib.skins(
        {
          boxHeight: LIB.sizes.m * LIB.lines.l,
          boxWidth: LIB.sizes.m * LIB.lines.l,
          trackShrink: 0,
        },
        skinImg,
      ),
      src,
    }),
    $box(
      { skin: lib.skins({ boxWidthMin: 0, trackGrow: 1 }, skinContent) },
      children,
    ),
  )
}

Component.displayName = lib.cc.p(ID)

export default Component
