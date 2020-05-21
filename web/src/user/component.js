import { ThemeProvider } from 'react-fela'
import { Helmet } from 'react-helmet-async'

const Component = () => {
  const { isLocalized: libIsLocalized } = libUse.say('lib', (language) => {
    return import(`app/locales/${language}.json`)
  })
  const { isLocalized: appIsLocalized } = libUse.say('app', (language) => {
    return import(`app/locales/${language}.json`)
  })
  const { language } = libUse.say()

  const renderer = libUse.renderer()

  const [context, setContext] = React.useState(storage.get())
  const [theme] = React.useState(lib.detectTheme())

  React.useEffect(() => {
    storage.set(context)
  }, [context])

  React.useEffect(() => {
    if (theme) {
      document.body.className = renderer.renderRule(skins.self, { theme })
    }
  }, [theme])

  if (!libIsLocalized) return null
  if (!appIsLocalized) return null

  const isAuthorized = Boolean(context.token)

  const Context = React.lazy(() => {
    return import(
      `app/${isAuthorized ? 'authorized' : 'unauthorized'}/component`
    )
  })

  return $(
    services.Context.Provider,
    {
      value: {
        id: context.id,
        isAuthorized,
        role: context.role,
        setContext,
        token: context.token,
      },
    },
    $(Helmet, { htmlAttributes: { lang: language } }),
    $(ThemeProvider, { theme }, $(LibLoaderSelf, $(Context))),
  )
}

Component.displayName = lib.cc.p(ID)

export default Component
