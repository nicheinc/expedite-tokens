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
---
## [1.1.0] - 2022-01-14
### Changed
- Made `colors.ts` export a named const to avoid confusing renaming of default export later.  This not affect external interfaces.
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