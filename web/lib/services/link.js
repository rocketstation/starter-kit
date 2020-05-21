import linkifyIt from 'linkify-it'
import tlds from 'tlds'

const link = linkifyIt()

link.tlds(tlds).add('ftp:', null).set({ fuzzyEmail: false })

export default link
