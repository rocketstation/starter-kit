const Component = ({ skinSelf, skinTitle, children }) => {
  return $box(
    { skin: lib.skins(libSkins.contentBottom, skinSelf) },
    $box(
      {
        skin: lib.skins(
          libSkins.contentRight({ space: LIB.spaces.sx }),
          {
            kind: 'track',
            trackAlign: 'center',
            trackPlace: 'center',
          },
          skinTitle,
        ),
      },
      $box(4),
      $(LibLogo),
      $box(4),
    ),
    children,
  )
}

Component.displayName = lib.cc.p(ID)

export default Component
