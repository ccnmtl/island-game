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
var islandGame = require('island-game');
var jQuery = require('jquery');

var islandView = new islandGame.IslandGameView({
model: new islandGame.IslandGame(
    {beforeMedication: true}),
        el: 'div#island_container',
		gender: jQuery('div#gender').html(),
        mode: jQuery('div#mode').html()
    });
```

Make sure you have webpack configured to use `css-loader`:

```
    ...
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
    ...
```
