import { RendererContext, ThemeContext } from 'react-fela'
import { matchPath, useHistory, useParams, useLocation } from 'react-router-dom'

export const renderer = () => {
  return React.useContext(RendererContext)
}

export const theme = () => {
  return React.useContext(ThemeContext)
}

export const location = () => {
  const location = useLocation()

  return {
    ...location,
    match(path, isStrict = true) {
      return Boolean(matchPath(location.pathname, { exact: isStrict, path }))
    },
  }
}

export const toggler = ({ onClose, onOpen } = {}) => {
  const [state, setState] = React.useState(false)

  const open = (v) => {
    if (onOpen) onOpen()
    setState(v ?? true)
  }

  const close = () => {
    if (onClose) onClose()
    setState(false)
  }

  const toggle = (v) => {
    if (state) close()
    else open(v)
  }

  return {
    close,
    isActive: Boolean(state),
    open,
    state,
    toggle,
  }
}

export const history = useHistory
export const params = useParams

export req from './req'
export say from './say'
