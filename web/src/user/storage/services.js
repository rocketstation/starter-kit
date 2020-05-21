import create from '@rocketstation/local-storage'

export const { add, get, remove, set, update } = create(lib.cc.k(NAME, VERSION))
