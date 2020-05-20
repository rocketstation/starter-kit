import { useTranslation } from 'react-i18next'

export default (ns, localizer) => {
  const { t, i18n } = useTranslation(ns)

  const [isLocalized, setIsLocalized] = React.useState()

  React.useEffect(() => {
    setIsLocalized(i18n.hasResourceBundle(i18n.language, ns))

    const handle = (languageNext, nsNext) => {
      if (languageNext === i18n.language && nsNext === ns) setIsLocalized(true)
    }

    i18n.store.on('added', handle)

    return () => {
      i18n.store.off('added', handle)
    }
  }, [i18n.language, ns])

  React.useEffect(() => {
    if (localizer && !i18n.hasResourceBundle(i18n.language, ns)) {
      localizer(i18n.language).then(({ default: locale }) => {
        i18n.addResourceBundle(i18n.language, ns, locale)
      })
    }
  }, [i18n.language, ns, localizer])

  return {
    changeLanguage: i18n.changeLanguage,
    i18n,
    isLocalized,
    language: i18n.language,
    say: t,
    sayDirty(v, config) {
      return t(v, { ...config, interpolation: { escapeValue: false } })
    },
  }
}
