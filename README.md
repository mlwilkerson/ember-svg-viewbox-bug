# ember-svg-viewbox-bug

This app demonstrates a bug in ember-3.1.0-beta.1 (also observed in 3.1.0-beta.5) whereby the viewBox attribute of
component with tagName 'svg' is mis-spelled as 'viewbox' (without the capital B).

## Usage
1. `yarn`
2. `ember serve`
3. load http://localhost:4200 in a browser

## See it Pass in Ember 3.0.0
1. modify the `ember-source` version in `package.json` like this: `"ember-source": "~3.0.0"`
2. `yarn`
3. load http://localhost:4200 in a browser
