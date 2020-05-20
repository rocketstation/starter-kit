import { RendererContext, ThemeContext } from 'react-fela'

export const renderer = () => {
  return React.useContext(RendererContext)
}

export const theme = () => {
  return React.useContext(ThemeContext)
}

export const useToggler = ({ onClose, onOpen } = {}) => {
  const [state, setState] = React.useState(false)

  return {
    close() {
      if (onClose) onClose()
      setState(false)
    },
    open(v) {
      if (onOpen) onOpen()
      setState(v ?? true)
    },
    state,
  }
}

export req from './req'
export say from './say'
