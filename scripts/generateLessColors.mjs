import { colors } from '../dist/index.js'
import path from 'path'
import * as fs from 'fs'

console.log('Starting to generate .less version of colors.ts...')

const __dirname = path.resolve()
const colorsDotLessPath = `${__dirname}/dist/colors/colors.less`

const outFileLines = []
outFileLines.push('// THIS FILE WAS AUTOMATICALLY GENERATED FROM colors.ts')
Object.keys(colors).forEach(colorName => {
    outFileLines.push(`@${colorName}: ${colors[colorName]};`)
})
const finalOutput = `${outFileLines.join('\n')}\n`

fs.writeFile(colorsDotLessPath, finalOutput, err => err && console.error(err))

console.log('Finished generating .less version of colors.ts...')
