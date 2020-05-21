import ReactDOM from 'react-dom'

const Component = ({
  children,
  state,
  isActive,
  close,
  open,
  toggle,
  skinSelf,
  skinContent,
  skinCloseWrapper,
  skinClose,
  skinCloseContent,
  ...props
}) => {
  const [content, setContent] = React.useState()

  const ref = React.useRef()

  React.useEffect(() => {
    if (isActive) setContent(document.createElement('div'))
    else setContent()
  }, [isActive])

  React.useEffect(() => {
    if (content) {
      const self = document.getElementById('modal')

      const handleClick = (e) => {
        if (ref.current === e.target) close()
      }

      const handleKeyDown = (e) => {
        if (e.keyCode === LIB.keys.escape) close()
      }

      self.appendChild(content)

      document.addEventListener('click', handleClick)
      document.addEventListener('keydown', handleKeyDown)

      return () => {
        if (self.contains(content)) self.removeChild(content)

        document.removeEventListener('click', handleClick)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [content])

  if (!content) return null

  return ReactDOM.createPortal(
    $box(
      {
        ref,
        skin: lib.skins(({ theme }) => {
          return {
            box: lib.hsla(LIB.colors.dark[theme])(33),
            boxHeight: '100%',
            boxMoveLeft: 0,
            boxMoveTop: 0,
            boxOrder: LIB.orders.modal,
            boxPosition: false,
            boxSpaceInner: LIB.spaces.s,
            boxWidth: '100%',
            kind: 'track',
            trackDirection: 'y',
          }
        }, skinSelf),
        ...props,
      },
      $box(
        {
          skin: lib.skins(
            libSkins.box,
            {
              boxHeightMax: '100%',
              boxOverflowY: 'auto',
              boxSpaceOuter: 'auto',
              boxWidth: '100%',
              boxWidthMax: LIB.screens.s / LIB.unit,
            },
            skinContent,
          ),
        },
        $(
          LibTrack,
          { place: 'end', skinSelf: skinCloseWrapper },
          $(
            LibButtonSelf,
            {
              action: close,
              skinSelf: lib.skins(
                libButtonSkins.self,
                { boxSpaceInner: LIB.spaces.s },
                skinClose,
              ),
            },
            $(LibIcon, { skinSelf: skinCloseContent, src: 'cross' }),
          ),
        ),
        children,
      ),
    ),
    content,
  )
}

Component.displayName = lib.cc.p(ID)

export default Component
