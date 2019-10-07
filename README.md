<h1 align="center">Expedite design tokens</h1>

<h3 align="center">Colors, spacing, animation, and typography for all platforms (aspirationally)</h3>

<p align="center"><em>JavaScript · JSON · CSS · SCSS</em></p>

---

[Design tokens](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) for Expedite, Niche's design system.

Design tokens originated at Salesforce, and the best way to describe them is to simply quote their documentation:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – [Salesforce UX](https://www.lightningdesignsystem.com/design-tokens/)

## Installation

Expedite design tokens are only available from this GitHub repository.

The recommended way to use and install design tokens may vary depending on your project; 

## Usage

Coming soon...

### JavaScript

In JavaScript, design token names are formatted in [lower camelCase](http://wiki.c2.com/?CamelCase).

```js
const tokens = require('@shopify/polaris-tokens');
console.log(tokens.colorBlueLighter); // rgb(235, 245, 250)
```

In JSON, design token names are formatted in [kebab-case](http://wiki.c2.com/?KebabCase).

```js
const tokens = require('@shopify/polaris-tokens/dist/index.json');
console.log(tokens['color-blue-lighter']); // rgb(235, 245, 250)
```

Note that, if your project supports ECMAScript Modules, you can also use the `import` syntax.

```js
import * as tokens from '@shopify/polaris-tokens';
// or
import {colorBlueLighter} from '@shopify/polaris-tokens';
```

### Sass

Sass variables and map keys are formatted in [kebab-case](http://wiki.c2.com/?KebabCase).

```scss
// Using variables
@import '~@shopify/polaris-tokens/dist/index';

a {
  color: $color-blue-text;
}

// Using the map of all tokens
@import '~@shopify/polaris-tokens/dist/index.map';

a {
  color: map-get($polaris-index-map, 'color-blue-text');
}

// Using the map for a specific type of tokens (here: spacing)
@import '~@shopify/polaris-tokens/dist/spacing.spacing-map';

a {
  color: map-get($polaris-spacing-map, 'loose');
}
```

### Sass, with CSS Custom Properties

Custom properties are formatted in [kebab-case](http://wiki.c2.com/?KebabCase).

```scss
// Omit .css at the end of the file
@import '~@shopify/polaris-tokens/dist/colors.custom-properties';

a {
  color: var(--color-blue-text);
}
```

---

## Contributing

The purpose of this repository is to see the core design elements of the Expedite design system
evolve and improve over time with the needs of developers, designers and partners in mind.

We gratefully accept impromptu contributions to the documentation, typo and bug fixes,
and expect design token requests and changes to be discussed before a pull request.

### Code of conduct

Coming soon...

### Contributing guide

Coming soon...

### License

The expedite-tokens project is available under the MIT license.

Parts of the code in this repository are directly inspired or borrowed
from the [Theo project](https://github.com/salesforce-ux/theo),
property of Salesforce.com, Inc., [licensed under BSD 3-Clause](https://git.io/sfdc-license),
and also the [Polaris project](https://github.com/Shopify/polaris-react), 
property of Shopify, Inc.