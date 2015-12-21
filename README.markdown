## Masivukeni Island Game

Packaging the Island Game activity from
[Masivukeni](https://github.com/ccnmtl/smart_sa/) as a reusable
javascript library.

(none of the rest of this really works yet. I'm doing documentation
driven development):

### Install 

    $ npm install island-game --save


make an entrypoint .js file somewhere:

```
var model = require('island-game').IslandGame;
var view = require('island-game').IslandGameView;
var jQuery = require('jquery');

var islandView = new view({
    model: new model({
        beforeMedication: true}),
        el: 'div#island_container',
		gender: 'F',
        mode: 'after-medication'
    });
```

Put some scaffold HTML elements in place:

```
    <div id="island_container" class="island-container"></div>
```

configure webpack:

```
    entry: [
        "./media/island-game-entrypoint.js",
	],
    ...
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
    ...
```

```
$ webpack --config webpack.config.js
```

### Todo

* [ ] construct required DOM elements automatically. Basically
  everything in
  [here](https://github.com/ccnmtl/smart_sa/blob/master/smart_sa/island_game/templates/island_game/island.html)
* [ ] tests
* [ ] publish to npm
* [ ] image path fixes in js and css
