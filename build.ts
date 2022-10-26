import { writeFile } from 'fs'
import { renderFile } from 'pug'

writeFile('README.md', renderFile('README.pug'), () => {})