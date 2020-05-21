const Component = ({ space, skinSelf, ...props }) => {
  return $box({
    skin: lib.skins(
      {
        kind: 'track',
        trackDirection: 'x',
      },
      libSkins.contentRight({ space }),
      skinSelf,
    ),
    ...props,
  })
}

Component.displayName = lib.cc.p(ID)

export default Component
