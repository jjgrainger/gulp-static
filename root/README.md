# {%= name %} v{%= version %}

> {%= description %}

## Requirements

* You have [npm](https://nodejs.org/en/) installed
* You have [Bower](https://bower.io) installed
* You have [Gulp](http://gulpjs.com/) installed

[`gulp-image-resize`](https://www.npmjs.com/package/gulp-image-resize) requires a couple of dependencies installed on the system. These can be installed easily enough with [Homebrew](https://brew.sh/):

```
$ brew install imagemagick
$ brew install graphicsmagick
```

## Getting Started

First you'll need to download all dependencies.

```
$ npm install
$ bower install
```

Once done, you'll able to start up Gulp and get building...

```
$ gulp
```

## Development

Most of your work will take place in the `/app` directory. Inside you'll find additional folders.

* __assets__ - Holds all sass, js and image files, each compiled respectively.
* __data__ - Json data to be used when compiling templates.
* __pages__ - All html pages that are compiled into the `/public` directory.
* __templates__ - Nunjucks templates and partials live here.

## Deployments

You can deploy straight to surge.sh with `$ gulp deploy`.

Make sure the domain is set in the `CNAME` in the `/public` folder.

Everything in the `/public` will be deployed.
