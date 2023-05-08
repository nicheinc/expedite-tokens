<!--
    PLEASE READ https://keepachangelog.com/en/1.0.0/ BEFORE EDITING. Thanks!
-->
# Changelog

All notable changes to this project will be documented in this file.

<!--
    Ideally we would adhere to semver, but it's a little wild west for now,
    so until we strictly do (maybe 2.0.0), we should omit that statement from
    the Changelog. At that time, we should change the statement below to:

    The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
-->

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]
### Changed
  - Updated the node version to `16.14.2` 
  - Updated the npm version to `8.5.0`
## [2.0.0]
### Added
 - Added the following colors: `pink100`, `pink200`, `pink300`, `pink500`, `pink600`, `orange100`, `orange200`, `orange300`, `orange400`, `orange500`, `orange600`, `royal100`, `royal200`, `royal300`, `royal500`, `royal600`, `royal700`

### Changed
  - Changed the value of the following colors: `yellow500`, `pink400`, `orange400`, `royal400`

### Removed
  - Removed the following colors: `jade600`, `xanadu100`, `xanadu200`, `xanadu300`, `xanadu400`, `xanadu500`
---
## [1.3.0] - 2023-04-06
### Added
 - `360px` breakpoint
---
## [1.2.1] - 2023-02-16
### Changed
 - Typed all token constants using TypeScript const assertions.
---
## [1.2.0] - 2022-02-21
### Added
 - `breakpoints.ts` based on Expedite v0.5 breakpoints
---
## [1.1.1] - 2022-02-21
### Changed
 - The value of `warm500` from `#CEAE98` to `#D2AD94`.  Releasing this as a patch update since nothing depends on warm500 yet.
---
## [1.1.0] - 2022-01-14
### Changed
- Made `colors.ts` export a named const to avoid confusing renaming of default export later.  This does not affect external interfaces.
- Changed `generateLessColors.mjs` to `generateLessTokens.mjs`.  It is generic enough to generate colors and shadows, at least.
### Added
- `shadows.ts` (Shadows from Expedite v0.2)
### Removed
- `/dist/` from git

---
## [1.0.0] - 2022-01-13
### Changed
- Restart the project with simplicity in mind
### Added
- `colors.ts` based on Expedite v0.2 colors
- script to generate a `colors.less` version of these colors during build