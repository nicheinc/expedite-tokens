<h1 align="center">Expedite Design Tokens</h1>

[Design tokens](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) for Expedite, Niche's design system.

Design tokens originated at Salesforce, and the best way to describe them is to simply quote their documentation:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – [Salesforce UX](https://www.lightningdesignsystem.com/design-tokens/)

## Installation

`npm install @nicheinc/expedite-tokens`
## Usage

Tokens are packaged in various ways for various packages.

Using Expedite Colors in a `JavaScript` file

```javascript
import { colors } from '@nicheinc/expedite-tokens'
const myColor = colors.green100
```

Using Expedite Colors in a `.less` file
```less
@import '~@nicheinc/expedite-tokens/dist/colors/colors.less';
.myClass {
    background: @green100;
}
```

---

## Contributing
### Versioning
This project follows semantic versioning of `MAJOR.MINOR.PATCH`.  Changes to tokens should trigger at least a minor version bump.  Tweaks to how the project is layed out that do not affect clients may simply bump the patch value.

If you need to publish a package during development, you should use the `-beta` modifier.  For example, if the current version of `expedite-tokens` is `1.2.0` and you are working on a branch that you expect to become `1.3.0`, you may publish a package as `1.3.0-beta1` in order to share your work with others.  DO NOT publish `1.3.0` during development.  Once your work is accepted and merged to `master`, it will be published as `1.3.0` and a release will be announced on GitHub.

### Code of conduct

Coming soon...

### Contributing guide

Coming soon...

### License

The expedite-tokens project is available under the MIT license.