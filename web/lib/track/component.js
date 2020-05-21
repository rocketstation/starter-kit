const Component = ({ align, direction, place, skinSelf, ...props }) => {
  return $box({
    skin: lib.skins(
      {
        kind: 'track',
        trackAlign: align,
        trackDirection: direction,
        trackPlace: place,
      },
      skinSelf,
    ),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
