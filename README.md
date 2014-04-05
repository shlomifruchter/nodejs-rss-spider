nodejs-rss-spider
=================

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - Make sure it's running on the default port (27017).

### Tools Prerequisites
* NPM - Node.js package manager, should be installed when you install node.js.
* Bower - Web package manager, installing [Bower](http://bower.io/) is simple when you have npm:
* Grunt - Download and Install [Grunt](http://gruntjs.com).

## Getting started

**Install MongoDB, make sure mongod runs on default port (localhost:27017)**

**Install the following npm packages:**
```sh
npm install -g bower
npm install -g grunt-cli
```

**Install dependencies:**
```sh
npm install
bower install
```

**Run local server which will launch a nodejs server on port 3000:**
```sh
grunt server
```

##Using the API to crawl RSS feeds

Post a JSON to http://localhost:3000/crawl, using the following structure:

```
{
	"url": "http://rss.cnn.com/rss/edition.rss"
}
```

The crawled URLs will be displayed in http://localhost:3000/#/posts.