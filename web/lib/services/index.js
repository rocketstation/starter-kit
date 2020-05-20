export const detectTheme = () => {
  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export const step = (step) => {
  return (step * LIB.step) / LIB.unit
}

export const inc = (v, min, max, step = 1) => {
  const next = v + step

  return next > max ? min : next
}

export const dec = (v, min, max, step = 1) => {
  const next = v - step

  return next < min ? max : next
}

export const parseBlob = (blob) => {
  if (blob?.type) {
    return URL.createObjectURL(blob)
  }
}

export const handle400 = (e, say = {}, fn) => {
  if (IS_DEVELOPMENT) console.error(e)
  if (e.status === 400) fn(e.key, say[e.key]?.err?.[e.val])
}

export const notify = async (title, config) => {
  if ('Notification' in window && navigator.serviceWorker) {
    let { permission } = Notification

    if (permission !== 'granted') {
      permission = await Notification.requestPermission()
    }

    if (permission === 'granted') {
      const serviceWorkerRegistration = await navigator.serviceWorker.getRegistration()

      serviceWorkerRegistration.showNotification(title, config)
    }
  }
}

export class Req {
  constructor(request) {
    this.isCanceled = false
    this.request = request
  }

  cancel() {
    this.isCanceled = true
  }

  run(...args) {
    return new Promise((resolve, reject) => {
      this.request(...args).then(
        (val) => {
          return this.isCanceled ? reject(new Error('Canceled')) : resolve(val)
        },
        (err) => {
          return this.isCanceled ? reject(new Error('Canceled')) : reject(err)
        },
      )
    })
  }
}

export * as dt from './dt'
export fela from './fela'
export i18n from './i18n'
export * as req from './req'
export * as screen from './screen'
export { combineRules as skins } from 'fela'
export * as cc from '@rocketstation/change-case'
export * as skin from '@rocketstation/skin'
export hsla from '@rocketstation/hsla'
