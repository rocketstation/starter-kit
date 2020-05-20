import { screenFrom, screenTo, screenBetween } from '@rocketstation/skin'

export const between = (from, to) => {
  return screenBetween(LIB.screens[from] ?? from, LIB.screens[to] ?? to)
}

export const from = (v) => {
  return screenFrom(LIB.screens[v] ?? v)
}

export const to = (v) => {
  return screenTo(LIB.screens[v] ?? v)
}
