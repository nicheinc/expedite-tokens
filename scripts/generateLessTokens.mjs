import { colors } from '../dist/index.js'
import { shadows } from '../dist/index.js'
import { breakpoints } from '../dist/index.js'
import path from 'path'
import * as fs from 'fs'
const __dirname = path.resolve()

const writeJsObjectToLessFile = ({ jsObject, outPath, transform }) => {
    const outFileLines = []
    outFileLines.push('// THIS FILE WAS AUTOMATICALLY GENERATED')
    Object.keys(jsObject).forEach(varName => {
        const value = transform ? transform(jsObject[varName]) : jsObject[varName]
        outFileLines.push(`@${varName}: ${value};`)
    })
    const finalOutput = `${outFileLines.join('\n')}\n`

    fs.writeFile(outPath, finalOutput, err => err && console.error(err))
}

console.log('Starting to generate .less version of colors.ts...')
writeJsObjectToLessFile({ jsObject: colors, outPath: `${__dirname}/dist/colors/colors.less` })
console.log('Finished generating .less version of colors.ts...')

console.log('Starting to generate .less version of shadows.ts...')
writeJsObjectToLessFile({ jsObject: shadows, outPath: `${__dirname}/dist/shadows/shadows.less` })
console.log('Finished generating .less version of shadows.ts...')

console.log('Starting to generate .less version of breakpoints.ts...')
writeJsObjectToLessFile({
    jsObject: breakpoints,
    outPath: `${__dirname}/dist/breakpoints/breakpoints.less`,
    transform: value => `~'only screen and (min-width: ${value})'`,
})
console.log('Finished generating .less version of breakpoints.ts...')
