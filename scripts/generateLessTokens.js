const fs = require('fs')
const tokens = require('../dist/index.js')
const path = require('path')

const dirname = path.resolve(),
    writeJsObjectToLessFile = ({ jsObject, outPath, transform }) => {
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
writeJsObjectToLessFile({ jsObject: tokens.colors, outPath: `${dirname}/dist/colors/colors.less` })
console.log('Finished generating .less version of colors.ts...')

console.log('Starting to generate .less version of shadows.ts...')
writeJsObjectToLessFile({ jsObject: tokens.shadows, outPath: `${dirname}/dist/shadows/shadows.less` })
console.log('Finished generating .less version of shadows.ts...')

console.log('Starting to generate .less version of breakpoints.ts...')
writeJsObjectToLessFile({
    jsObject: tokens.breakpoints,
    outPath: `${dirname}/dist/breakpoints/breakpoints.less`,
    transform: value => `~'only screen and (min-width: ${value}px)'`,
})
console.log('Finished generating .less version of breakpoints.ts...')
